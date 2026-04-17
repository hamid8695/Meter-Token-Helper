import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Personal Portfolio",
    category: "Portfolio Website",
    img: "/projects/personal_portfolio.jpg", // This now points to public/projects/
    link: "/projects/portfolio",
  },
  {
    title: "Business Website",
    category: "Corporate",
    img: "/projects/busines_web.jpg",
    link: "/projects/business",
  },
  {
    title: "News Portal",
    category: "News Platform",
    img: "/projects/news_portal.jpg",
    link: "/projects/news",
  },
  {
    title: "School Management System",
    category: "Web Application",
    img: "/projects/school.jpg",
    link: "/projects/school",
  },
  {
    title: "E-commerce Store",
    category: "Online Shop",
    img: "/projects/ecommerce.jpg",
    link: "/projects/ecommerce",
  },
  {
    title: "Custom Website",
    category: "SaaS App",
    img: "/projects/custom.jpg",
    link: "https://example.com", 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Recent Projects
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            // <Link
            //   href={project.link}
            //   key={index}
            //   target={project.link.startsWith("http") ? "_blank" : "_self"}
            // >
            <div key={index}>
              <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white border border-slate-100">

                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden bg-slate-200">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {project.category}
                  </p>
                  {/* <span className="mt-3 inline-block text-blue-600 text-sm font-medium group-hover:underline">
                    View Details →
                  </span> */}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;