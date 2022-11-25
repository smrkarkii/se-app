import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Home/pages_elements/Navbar";


//Routes
import Gallery from "./Pages/Gallery";
import Events from "./Pages/Events.js";
import Reservations from "./Pages/Reservations.js";
import Contact from "./Pages/contact";


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/Gallery" element={<Gallery />} />
        <Route exact path="/Events" element={<Events />} />
        <Route exact path="/Reservations" element={<Reservations />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
