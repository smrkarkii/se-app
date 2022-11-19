import React from "react";

//page elements
import Navbar from "./pages_elements/Navbar";
import Banner from "./pages_elements/Banner";
import Intro from "./pages_elements/Intro";
import Services from "./pages_elements/Services";
import Footer from "./pages_elements/Footer";
import Team from "./pages_elements/Team";




function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Intro/>
      <Services/>
      <Team/>
      <Footer/>
    </>
  );
}

export default App;
