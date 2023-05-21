import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import postContext from "../context/post/postContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./customcalendar.css";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();

const ManageCalendar = () => {
  const context = useContext(postContext);
  const { bookings, unbookdate, bookDate, getBookedDates } = postContext;
  const [availableDates, setAvailableDates] = useState([]);
  const [bookedDates, , setBookedDates] = useState([]);
  const [clickedDates, setClickedDates] = useState([]);

  // // Other form state variables and logic

  useEffect(() => {
    // Fetch available and booked dates from the backend
    // Example fetch call:

    // setAvailableDates(bookings.availableDates);
    getBookedDates();
    setBookedDates(bookings);
  }, []);
  console.log(bookings);
  console.log("bookings ", bookedDates);
  // // Handle date selection
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
  // const isReserved = (date) => {
  //   const formattedDate = moment(date).format("YYYY-MM-DD");
  //   return availableDates.includes(formattedDate);
  // };

  // const reservePost = () => {};
  //Other form submit logic

  // return (
  //   <>
  //     {(document.title = "ICTC - Manage Reservations")}
  //     <div className="pages-bg" style={{ marginTop: "-6rem" }}>
  //       <div className="bf-container">
  //         <div className="bf-body">
  //           <div className="bf-head" style={{ marginBottom: "-2rem" }}>
  //             <h1 className="h1">Reservation Form</h1>
  //           </div>
  //           <form className="bf-body-box" method="POST">
  //             <div className="bf-row">
  //               <div className="bf-col-6">
  //                 <p className="p-reservation">Select Date</p>
  //                 <DatePicker
  //                   // value={}
  //                   // onChange={(date) =>
  //                   //   inputHandler({ target: { name: "date", value: date } })
  //                   // }
  //                   filterDate={isReserved}
  //                   minDate={moment().toDate()}
  //                   // placeholderText={placeholderText()}
  //                 />
  //                 {/* <input
  //                 className="input"
  //                 type="date"
  //                 name="date"
  //                 id="date"
  //                 value={reservation.date}
  //                 onChange={inputHandler}
  //               /> */}
  //               </div>
  //             </div>

  //             <div className="bf-row">
  //               <div className="bf-col-12">
  //                 <p className="p-reservation">Messages</p>
  //                 <textarea
  //                   className="textarea"
  //                   name="message"
  //                   id="message"
  //                   // value={reservation.message}
  //                   // onChange={inputHandler}
  //                   cols="10"
  //                   rows="2"
  //                 ></textarea>
  //               </div>
  //             </div>

  //             <div className="bf-row">
  //               <div className="bf-col-3">
  //                 <button
  //                   className="submit"
  //                   type="button"
  //                   onClick={reservePost}
  //                 >
  //                   Reserve
  //                 </button>
  //               </div>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  const clickDate = (date) => {
    if (bookedDates.includes(date.toDateString())) {
      // Date already clicked, remove it from the clickedDates array
      setAvailableDates((prevClickedDates) =>
        prevClickedDates.filter(
          (clickedDate) => clickedDate !== date.toDateString()
        )
      );
    } else {
      // Date not clicked, add it to the clickedDates array
      setBookedDates((prevClickedDates) => [
        ...prevClickedDates,
        date.toDateString(),
      ]);
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
        <Calendar onClickDay={clickDate} tileContent={tileContent} />
      </div>
    </>
  );
};

export default ManageCalendar;

// export default function ManageCalendar() {
//   const context = useContext(postContext);
//   const { reservations, getReservations } = context;
//   const Navigate = useNavigate();

//   const [bookedDate, setBookDate] = useState([]);

//   const inputHandler = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     if (name === "date" && value) {
//       setBookDate({
//         ...bookedDate,
//         date: value,
//       });
//     }
//   };

//   const bookDate = async (e) => {
//     console.log("reserving");
//     e.preventDefault();
//     let { date } = bookedDate;
//     let res = await fetch("localhost:8000/reservations/new", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         message,
//         date,
//       }),
//     });
//     let resJson = await res.json();

//     if (resJson.errors && resJson.errors.length > 0) {
//       resJson.errors.forEach((error) => {
//         toast.error(error.msg);
//       });
//     }
//     if (resJson.result) {
//       toast.success("Reservation Successful");
//       Navigate("/login");
//     }
//   };
//   const reservedDates = reservations.map((record) =>
//     moment(record.date).format("YYYY-MM-DD")
//   );

//   const allDates = [];
//   const startDate = moment(); // start with today's date
//   const endDate = moment().add(1, "year"); // end after 1 year from today

//   // loop to generate an array of all dates for one year
//   while (startDate.isBefore(endDate)) {
//     allDates.push(startDate.format("YYYY-MM-DD"));
//     startDate.add(1, "day");
//   }

//   // filter out the reserved dates to get the non-reserved dates
//   const nonReservedDates = allDates.filter(
//     (date) => !reservedDates.includes(date)
//   );

//   const isReserved = (date) => {
//     const formattedDate = moment(date).format("YYYY-MM-DD");
//     return nonReservedDates.includes(formattedDate);
//   };

//   const placeholderText = () => {
//     return reservation.date
//       ? moment(reservation.date).format("YYYY-MM-DD")
//       : "Select a date";
//   };
//   return (
//     <>
//       {(document.title = "ICTC - Reservation")}
//       <div className="pages-bg" style={{ marginTop: "-6rem" }}>
//         <div className="bf-container">
//           <div className="bf-body">
//             <div className="bf-head" style={{ marginBottom: "-2rem" }}>
//               <h1 className="h1">Reservation Form</h1>
//             </div>
//             <form className="bf-body-box" method="POST">
//               <div className="bf-row">
//                 <div className="bf-col-6">
//                   <p className="p-reservation">Select booked Date</p>
//                   <DatePicker
//                     value={calendar.date}
//                     onChange={(date) =>
//                       inputHandler({ target: { name: "date", value: date } })
//                     }
//                     placeholderText={placeholderText()}
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
