'use client'
import React from "react";
import { 
  FaUser, 
  FaBriefcase, 
  FaNewspaper, 
  FaSchool, 
  FaShoppingCart,
  FaCode
} from "react-icons/fa";

const services = [
  {
    title: "Personal Portfolio Website",
    icon: <FaUser />,
    desc: "Showcase your skills, projects, and achievements with a modern personal portfolio.",
  },
  {
    title: "Business Portfolio Website",
    icon: <FaBriefcase />,
    desc: "Build a strong online presence for your company with professional design.",
  },
  {
    title: "News Portal Website",
    icon: <FaNewspaper />,
    desc: "Launch a fast and scalable news platform with dynamic content management.",
  },
  {
    title: "School Management System",
    icon: <FaSchool />,
    desc: "Manage students, teachers, attendance, and results efficiently.",
  },
  {
    title: "E-commerce Website",
    icon: <FaShoppingCart />,
    desc: "Start selling online with a powerful and secure e-commerce platform.",
  },
  {
    title: "Custom Web Application",
    icon: <FaCode />,
    desc: "Build tailored web apps like dashboards, SaaS platforms, and admin panels.",
  },
];

const Services = () => {
  return (
    <section id="services"  className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Our Services
        </h2>

        <p className="mt-3 text-slate-500 max-w-xl mx-auto">
          We provide smart software solutions to help your business grow digitally.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition shadow-sm hover:shadow-md"
            >
              <div className="text-blue-500 text-3xl mb-4 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-800">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;