import React from "react";
//page elements
import Footer from "./Home/pages_elements/Footer";
import Navbar from "./Home/pages_elements/Navbar";

//Routes
import Gallery from "./Pages/Gallery";
import Events from "./Pages/Events.js";
import Reservations from "./Pages/Reservations";
import Contact from "./Pages/contact";
import Home from "./Pages/Home";


import PageContent from "./components/PageContent";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Appv() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/Events" element={<Events />} />
          <Route exact path="/Reservations" element={<Reservations />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/ictc_admin" element={<PageContent />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Appv;
