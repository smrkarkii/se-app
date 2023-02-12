import React from "react";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reservation() {
  const Navigate = useNavigate();

  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });
  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setReservation({
      ...reservation,
      [name]: value,
    });
    console.log(reservation);
  };
  const reservePost = async (e) => {
    console.log("reserving");
    e.preventDefault();
    let { name, email, date, message } = reservation;
    let res = await fetch("http://localhost:8000/reservations/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        date,
      }),
    });
    let data = res.json();
    if (data.status === 500) {
      window.alert("Invalid");
    } else {
      window.alert(
        "Reservation has been requested. You will be mailed login credentials to proceed reservation."
      );
      Navigate("/login");
    }
  };

  return (
    <>
      {(document.title = "ICTC - Reservation")}
      <div className="pages-bg" style={{marginTop:"-6rem"}}>
        <div class="bf-container">
          <div class="bf-body">
            <div class="bf-head" style={{marginBottom:"-2rem"}}>
              <h1 class="h1">Reservation Form</h1>
            </div>
            <form class="bf-body-box" method="POST">
              <div class="bf-row">
                <div class="bf-col-6">
                  <p class="p-reservation">Your Name</p>
                  <input
                    class="input"
                    type="textarea"
                    name="name"
                    id="name"
                    value={reservation.name}
                    onChange={inputHandler}
                    placeholder="Your Name"
                  />
                </div>
                <div class="bf-col-6">
                  <p class="p-reservation">Email Address</p>
                  <input
                    class="input"
                    type="email"
                    name="email"
                    id="email"
                    value={reservation.email}
                    onChange={inputHandler}
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div class="bf-row">
                <div class="bf-col-6">
                  <p class="p-reservation">Select Date</p>
                  <input
                    class="input"
                    type="date"
                    name="date"
                    id="date"
                    value={reservation.date}
                    onChange={inputHandler}
                  />
                </div>
              </div>

              <div class="bf-row">
                <div class="bf-col-12">
                  <p class="p-reservation">Messages</p>
                  <textarea
                    class="textarea"
                    name="message"
                    id="message"
                    value={reservation.message}
                    onChange={inputHandler}
                    cols="10"
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <div class="bf-row">
                <div class="bf-col-3">
                  <button
                    className="submit"
                    type="button"
                    onClick={reservePost}
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
