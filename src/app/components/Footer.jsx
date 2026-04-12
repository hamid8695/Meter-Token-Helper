'use client'
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">NanoKite</h2>
          <p className="mt-3 text-sm text-slate-400">
            Smart software solutions for modern businesses. We help you grow digitally.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Portfolio Website</li>
            <li>Business Website</li>
            <li>E-commerce</li>
            <li>School Management</li>
            <li>Custom Web App</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 +8801XXXXXXXXX</li>
            <li>✉️ info@nanokite.com</li>
            <li>📍 Chattogram, Bangladesh</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-500 transition">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} NanoKite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;