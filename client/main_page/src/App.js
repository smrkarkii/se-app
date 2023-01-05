import React from "react";
//page elements
import Intro from "./Home/pages_elements/Intro";
import Services from "./Home/pages_elements/Services";
import Footer from "./Home/pages_elements/Footer";
import Team from "./Home/pages_elements/Team";

import "./App.css"

function App() {
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

export default App;
