import React from "react";
//page elements
import Navbar from "./Home/pages_elements/Navbar";

//Routes
import Gallery from "./Pages/Gallery";
import Events from "./Pages/Events.js";
import Reservations from "./Pages/Reservations";
import Contact from "./Pages/contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

import { Route, Routes } from "react-router-dom";

function MainPage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/Reservations" element={<Reservations />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default MainPage;
