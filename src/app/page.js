import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Services from "./components/Services";

const page = () => {
  return (
    <>
    <Navbar/>
      <Banner />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
