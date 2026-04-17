'use client'
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/img/nanokite_logo1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // mobile menu close
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="NanoKite Logo" width={140} height={40} />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button onClick={() => scrollToSection("home")} className="hover:text-blue-600">Home</button>
          <button onClick={() => scrollToSection("services")} className="hover:text-blue-600">Services</button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-blue-600">Portfolio</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600">Contact</button>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button onClick={() => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}} className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">
            Get a Quote
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-slate-700">
          <button onClick={() => scrollToSection("home")} className="block w-full text-left">Home</button>
          <button onClick={() => scrollToSection("services")} className="block w-full text-left">Services</button>
          <button onClick={() => scrollToSection("projects")} className="block w-full text-left">Portfolio</button>
          <button onClick={() => scrollToSection("contact")} className="block w-full text-left">Contact</button>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-2">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;