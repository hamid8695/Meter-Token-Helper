"use client";
import Image from "next/image";
import React from "react";
import logo from "../assets/img/nanokite_logo.jpeg";

const Banner = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="NanoKite Logo" width={180} height={60} />
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <button className="hover:text-slate-900">About</button>
          <button className="hover:text-slate-900">Contact</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Are Coming Soon
          </h1>

          <p className="text-slate-600 mb-8">
            Stay with us. We’re building something powerful and simple.
          </p>

          {/* Email Input */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <button className="px-6 py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition">
              Notify Me
            </button>
          </div>

          <p className="text-xs text-slate-500 mt-4">
            We’ll notify you when NanoKite launches 🚀
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-slate-500">
        © 2026 NanoKite. All rights reserved.
      </footer>
    </div>
  );
};

export default Banner;
