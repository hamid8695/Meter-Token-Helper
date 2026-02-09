'use client'
import React from 'react';
import manufacturer from "../assets/project/manufacturer-website.png";
import notension from "../assets/project/notension.jpg";
import fashion from "../assets/project/fashion&lifestyle.jpg";
import smartRoot from "../assets/project/smart-root-architect.png";
import tiles from "../assets/project/tiles-warehouse-management-web-app-Nest-Hub-Max-4-1-1.png";
import Image from 'next/image';
import custom_stype from '../style/custom.css'

const Projects = () => {
    const projects=[
        {
        id: 1,
        img_url: notension,
        name: "NoTension",
        liveLink: "https://notension-main.vercel.app/"
        },
        {
        id: 2,
        img_url: fashion,
        name: "Fashion & Lifestyle",
        liveLink: "https://notension-fashion-and-lifestyle.netlify.app/"
        },
        {
        id: 3,
        img_url: smartRoot,
        name: "Smart Root",
         liveLink: "https://smart-root-architect.web.app/"
        },
      ]
    
    return (
         <section id="portfolio" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Work</h2>
                  <p className="text-xl text-slate-600">Some of my recent projects</p>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative w-full h-56 overflow-hidden scroll-img">
                    <Image
                      src={project.img_url}
                      alt={project.name}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      {project.name}
                    </h2>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                      Live Link
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 3h7m0 0v7m0-7L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
         </div>
       </section>
    );
};

export default Projects;