import Image from "next/image";
import React from "react";
import Wikiance from "./../assets/img/wikiance.jpg";
import Notension from "./../assets/img/notension.jpg";

const Service = () => {
  return (
    <section
      id="experiences"
      className="py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-slate-600">My Journey</p>
        </div>
        <div className="relative grid md:grid-cols-2 gap-12 auto-rows-fr">
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-purple-300 to-purple-400"></div>
          <div className="relative md:pr-8 h-full">
            <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="absolute md:-left-8 -top-8 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
                <Image
                  src={Notension}
                  alt="Notension"
                  className="rounded-full w-12 h-12 md:w-12 md:h-12"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-slate-800 mt-6">
                Software Developer
              </h3>
              <p className="inline-block px-3 py-1 mb-3 text-sm font-medium text-blue-700 bg-blue-50 rounded-full shadow-sm">
                NoTension
              </p>
              <div className="flex flex-wrap gap-3 text-gray-600 text-sm mb-4">
                <span className="flex items-center gap-1">
                  📅 <span className="font-medium">08/2024 – Present</span>
                </span>
                <span className="flex items-center gap-1">
                  📍 <span className="font-medium">Muradpur, Chattogram</span>
                </span>
              </div>
              <p className="text-gray-500 leading-relaxed mt-auto">
                Driving full-stack development with the MERN stack — building
                features, optimizing performance, and delivering scalable
                solutions.
              </p>
            </div>
          </div>
          <div className="relative md:pl-8 h-full">
            <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="absolute md:-right-8 -top-8 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center shadow-md">
                <Image
                  src={Wikiance}
                  alt="Wikiance"
                  className="rounded-full w-12 h-12 md:w-12 md:h-12"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-slate-800 mt-6">
                MERN Stack Developer
              </h3>
              <p className="inline-block px-3 py-1 mb-3 text-sm font-medium text-blue-700 bg-blue-50 rounded-full shadow-sm">
                Wikiance
              </p>
              <div className="flex flex-wrap gap-3 text-gray-600 text-sm mb-4">
                <span className="flex items-center gap-1">
                  📅 <span className="font-medium">06/2023 – 03/2024</span>
                </span>
                <span className="flex items-center gap-1">
                  📍 <span className="font-medium">Kolkata, India</span>
                </span>
              </div>
              <p className="text-gray-500 leading-relaxed mt-auto">
                Developed scalable web applications, integrated APIs, and
                enhanced user experience for multiple client projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
