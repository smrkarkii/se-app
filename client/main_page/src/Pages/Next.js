import React from "react";
import "./style.css";
import qr from "./qr.png";

export default function Next() {
  return (
    <center>
      <img class="qrimage" src={qr} alt="qr" />
      <div className="back">
        <h1 class="scantopay">Scan to Pay </h1>
      </div>
    </center>
  );
}
