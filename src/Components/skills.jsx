import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const skills = [
    { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", category: "Frontend" },
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", category: "Frontend" },
    { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", category: "Frontend" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg", category: "Frontend" },
    { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", category: "Frontend" },
    { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", category: "Frontend" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg", category: "Frontend" },
    { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", category: "Backend" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg", category: "Backend" },
    { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", category: "Database" },
    { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", category: "Database" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg", category: "Tools" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg", category: "Design" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobephotoshop.svg", category: "Design" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg", category: "Tools" },
    { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", category: "Backend" },
  ];

  const SkillCard = ({ skill, index }) => (
    <div
      className={`group relative rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms`, background: 'rgba(255, 255, 255, 0.05)' }}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/15 via-blue-600/15 to-indigo-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition">
          <img 
            src={skill.icon}
            alt={skill.name}
            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
          />
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg items-center justify-center text-white font-bold text-lg hidden">
            {skill.name.charAt(0)}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 mb-1">
          {skill.name}
        </h3>
        <span className="text-xs font-medium text-white/80 group-hover:text-white px-2 py-1 rounded-full bg-white/10 group-hover:bg-purple-600/20">
          {skill.category}
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-20 bg-black min-h-screen relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-grid-16" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-600/15 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <User className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              My Skills
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-grid-16 {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 16px 16px;
        }
      `}</style>
    </section>
  );
};

export default Skills;