import React from 'react';
import {
  SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiMui ,
  SiRedux, SiFirebase, SiNodedotjs, SiNextdotjs, SiExpress,
  SiMongodb, SiMongoose, SiMysql, SiPostgresql, SiPostman, SiRedis
} from 'react-icons/si';
const Skills = () => {
    const skills = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'Material UI', icon: SiMui  },
  { name: 'Redux', icon: SiRedux },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Mongoose', icon: SiMongoose },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Postman', icon: SiPostman },
  { name: 'Redis', icon: SiRedis },
];

    return (
        <section id="skills" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">My Skills</h2>
                <p className="text-xl text-slate-600">What I Know</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {skills.map(({ name, icon: Icon }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 text-blue-600">
                      <Icon className="w-10 h-10" />
                    </div>
                    <span className="text-sm sm:text-lg font-medium text-gray-800 break-words">
                    {name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
       </section>
    );
};

export default Skills;