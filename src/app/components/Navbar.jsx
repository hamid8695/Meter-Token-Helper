'use client'
import React, { useState, useEffect } from "react";
import custom_style from '../style/custom.css'
import Logo from "../assets/img/logo-hamid.png";
import Image from "next/image";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experiences" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const height = mobileMenuOpen ? links.length * 48 + 32 : 0; 
    setMenuHeight(height);
  }, [mobileMenuOpen, links.length]);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home">
              <div className="flex items-center space-x-2">
              <Image
                  src={Logo}
                  alt="Logo"
                  width={150}    
                  height={150}  
                  className="object-contain"
                />
              </div>
          </a>   
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium "
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden bg-white shadow-lg w-full absolute left-0 top-full transition-all duration-300 ease-in-out`}
        style={{ maxHeight: `${menuHeight}px` }}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 "
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
