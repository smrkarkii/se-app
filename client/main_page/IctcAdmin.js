import React from 'react'
import App from "../ictc-admin/src/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function IctcAdmin() {
  return (
        <>
        <Router> 


          
      <Routes>
      <Route exact path="/ictc-admin" element={ <App/>} />

      </Routes>
    </Router>

        </>
  )
}
