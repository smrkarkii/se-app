import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import postContext from "../context/post/postContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./customcalendar.css";
import dayjs from "dayjs";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();

export default function ManageCalendar() {
  const context = useContext(postContext);
  const { bookings, unbookdate, bookDate, getBookedDates, loading } = context;
  const [availableDates, setAvailableDates] = useState([]);
  const [bookedDates, setBookedDates] = useState([]);
  const [clickedDates, setClickedDates] = useState([]);

  useEffect(() => {
    setBookedDates(bookings);
  }, [bookings]);

  const dates = bookedDates.map((data) => {
    const datas = data.date.substring(0, 10);
    const parts = datas.split("-"); // Split the date into an array of parts
    const formattedDate = parts.reverse().join("/");
    return formattedDate;
  }); //bookings fetched
  // console.log("bookings", bookings); //bookings fetched
  console.log("bookedDates date", dates);
  const clickDate = (date) => {
    console.log(
      "clicked",
      date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
    const formatted = date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    if (!dates.includes(formatted)) {
      console.log("clicked date is not  booked");
      // Date already clicked, remove it from the clickedDates array

      bookDate(date);
    } else {
      // console.log(bookedDates.toDateString());
      // console.log(date.toDateString());
      console.log("clicked date is  booked");
      // Date not clicked, add it to the clickedDates array
      unbookdate(date);
      // setBookedDates([...bookedDates, date]);
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === "month" && clickedDates.includes(date.toDateString())) {
      return <div className="clicked-tile"></div>;
    }
    return null;
  };
  return (
    <>
      <div className="Calendar">
        <h1>My Calendar</h1>
        <Calendar
          onClickDay={clickDate}
          tileContent={tileContent}
          // formatDay={(locale, date) => dayjs(date).format("YYYY-MM-DD")}
        />
      </div>
    </>
  );
}
