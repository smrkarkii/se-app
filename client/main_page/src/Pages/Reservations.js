import React from "react";
import "./style.css";

export default function Reservation() {
  return (
    <div className="pages-bg">
      <div class="bf-container">
        <div class="bf-body">
          <div class="bf-head">
            <h1 class="h1">Reservation Form</h1>
          </div>

          <form class="bf-body-box" action="form.php">
            <div class="bf-row">
              <div class="bf-col-6">
                <p class="p">Your Name</p>
                <input
                  class="input"
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Your Name"
                />
              </div>
              <div class="bf-col-6">
                <p class="p">Email Address</p>
                <input
                  class="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div class="bf-row">
              <div class="bf-col-6">
                <p class="p">Select Date</p>
                <input class="input" type="date" name="date" id="date" />
              </div>
            </div>

            <div class="bf-row">
              <div class="bf-col-12">
                <p class="p">Messages</p>
                <textarea
                  class="textarea"
                  name="Messages"
                  id="Messages"
                  cols="10"
                  rows="2"
                ></textarea>
              </div>
            </div>

            <div class="bf-row">
              <div class="bf-col-3">
                <input
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  class="input"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
