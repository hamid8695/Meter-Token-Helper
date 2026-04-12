'use client'
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="w-full bg-gradient-to-b from-slate-50 to-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 leading-tight">
          Smart Software
        </h1>

        <h2 className="text-3xl md:text-5xl font-semibold text-slate-700 mt-3">
          for Smart Businesses
        </h2>

        {/* Sub text */}
        <p className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto">
          Let us build your digital presence and success.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="flex items-center gap-2 mx-auto bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">
            📞 Get Started Today
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-slate-500 text-sm">
          <span>📞 +123-456-7890</span>
          <span className="hidden md:block">|</span>
          <span>✉️ info@nanokite.com</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;