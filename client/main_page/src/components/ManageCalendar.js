import React, { useContext, useEffect } from "react";
import { useState } from "react";
import postContext from "../context/post/postContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./customcalendar.css";

// import "react-toastify/dist/ReactToastify.css";
// toast.configure();

export default function ManageCalendar() {
  let formattedbookeddates;
  const context = useContext(postContext);
  const { bookings, unbookdate, bookDate, getBookedDates } = context;
  const [bookedDates, setBookedDates] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    setBookedDates(bookings);
  }, [bookings]);

  //bookings fetched
  console.log("bookings.bookedDates", bookings.bookedDates, bookedDates); //bookings fetched
  const isBookedDate = (date) => {
    formattedbookeddates = bookedDates.map((data) => {
      let datas = data.date;
      datas = datas.substring(0, 10);
      const parts = datas.split("-"); // Split the date into an array of parts
      const formattedDate = parts.reverse().join("/");
      console.log("inside isBookedDate", formattedDate);
      return formattedDate;
    });
    if (formattedbookeddates.includes(date)) {
      return true; //already booked
    } else {
      return false; //not booked
    }
  };
  function getDateIdByValue(date) {
    for (let booking of bookedDates) {
      let formattedBookings = booking.date.substring(0, 10);
      const parts = formattedBookings.split("-"); // Split the date into an array of parts
      formattedBookings = parts.reverse().join("/");
      console.log("inside getdate id ", formattedBookings, date, booking._id);

      if (date === formattedBookings) {
        return booking._id;
      }
    }
    return null; // Return null if the date is not found
  }

  const clickDate = async (date) => {
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
    if (!isBookedDate(formatted)) {
      console.log("clicked date is not  booked");
      // Date already clicked, remove it from the clickedDates array

      await bookDate(date);
    } else {
      // console.log(bookedDates.toDateString());
      // console.log(date.toDateString());
      console.log("clicked date is  booked");
      // Date not clicked, add it to the clickedDates array
      let id = getDateIdByValue(formatted);
      await unbookdate(id);
      // setBookedDates([...bookedDates, date]);
    }
  };

  const tileContent = ({ date, view }) => {
    const formatted = date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    if (view === "month") {
      return (
        <div className="tile-content-wrapper">
          <div className="hoverwrapper">
            <div
              className={`${isHovered ? "hover-text" : ""}`}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              {isHovered && (isBookedDate ? "Unbook-Date" : "Book Date")}
            </div>
          </div>

          <div className="clicked-tile"></div>
        </div>
      );
    }
    return null;
  };
  return (
    <>
      <div className="Calendar">
        <h2>Manage your Calendar</h2>
        <Calendar
          onClickDay={clickDate}
          tileContent={tileContent}
          // formatDay={(locale, date) => dayjs(date).format("YYYY-MM-DD")}
        />
      </div>
    </>
  );
}
