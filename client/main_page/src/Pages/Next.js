import React from "react";
import "./style.css";
import qr from "./qr.PNG";
// import "./style.css";

export default function Next() {
  return (
    <center>
      <img class="qrimage" src={qr} alt="qr" />
      <h1 class="h1">Scan to Pay</h1>
    </center>
  );
}
