import React from "react";
import Intro from "../Home/pages_elements/Intro";
import Services from "../Home/pages_elements/Services";
import Team from "../Home/pages_elements/Team";
import Footer from "../Home/pages_elements/Footer";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="banner"></div>

      <Intro />

      <Services />
      <Team />
      <Footer />
    </>
  );
}
