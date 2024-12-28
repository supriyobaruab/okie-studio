import React from "react";

import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
// import Mom from "./components/Mom";
import Navbar from "./components/Navbar";
import Sobay from "./components/Sobay";

export default function All() {
  return (
    <>
      <Main />
      <Navbar />
      <Sobay />
      <Gallery />
      <Footer />
    </>
  );
}
