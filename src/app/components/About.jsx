import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600">
            Learn more about my journey and education
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxkZXZlbG9wZXJ8ZW58MHwwfHx8MTc0Nzg5MDUyNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 rounded-2xl blur-xl"></div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-slate-600 leading-relaxed">
                I am a passionate web developer with over 2 years of experience
                creating modern, responsive, and user-friendly websites and applications.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                My goal is to solve challenging problems through elegant and
                efficient solutions, always prioritizing the user experience.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Education & Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    🎓
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-slate-800">
                      BSc in Computer Science & Engineering
                    </h4>
                    <p className="text-slate-600 text-sm">
                      International Islamic University Chittagong
                    </p>
                    <p className="text-slate-500 text-sm">2019 – 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    💻
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-slate-800">
                      Web Development Course
                    </h4>
                    <p className="text-slate-600 text-sm">Programming Hero</p>
                    <p className="text-slate-500 text-sm">2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
