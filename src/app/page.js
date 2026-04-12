import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
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
      {/* <Navbar />
      
      <About />
      <Skills />
      <Experience />
      <Projects />
       */}
    </>
  );
};

export default page;
