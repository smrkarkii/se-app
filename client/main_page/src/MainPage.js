import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Home/pages_elements/Navbar";
import Footer from "./Home/pages_elements/Footer";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Events from "./Pages/Events.js";
import Reservations from "./Pages/Reservations";
import Contact from "./Pages/contact";
import Login from "./Pages/Login";
import Next from "./Pages/Next";
import DetailEvents from "./Pages/DetailEvents";
import ServicesFront from "./Pages/ServicesFront";

function MainPage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/next" element={<Next />} />
        <Route path="/empdetails/:id" element={<DetailEvents />} />
        <Route path="/servicefront" element={<ServicesFront />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainPage;
