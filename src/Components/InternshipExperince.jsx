import React, { useState, useEffect } from 'react';

const InternshipExperience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: "Web Development Intern",
      company: "SquareLabs",
      duration: "July 2025 – Present",
      description: "Learning and working with Tailwind CSS, React, Node.js, and WordPress. Practicing modern web development standards in a team environment.",
      technologies: ["Tailwind CSS", "React", "Node.js", "MongoDb", "WordPress"],
      achievements: [
        "Collaborated with cross-functional teams to implement responsive web interfaces",
        "Contributed to WordPress theme development using modern JavaScript frameworks",
        "Applied Tailwind CSS for rapid prototyping and consistent design systems"
      ]
    }
    // Add more experiences here as needed
  ];

  const ExperienceCard = ({ experience, index }) => (
    <div
      className={`group relative bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/15 via-blue-600/15 to-indigo-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-1">
              {experience.title}
            </h3>
            <h4 className="text-lg font-semibold text-white/80 mb-2">
              {experience.company}
            </h4>
          </div>
          <div className="mt-2 sm:mt-0">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white/80 font-medium rounded-full text-sm border border-white/10">
              {experience.duration}
            </span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-white/70 leading-relaxed mb-6 text-base">
          {experience.description}
        </p>
        
        {/* Technologies */}
        <div className="mb-6">
          <h5 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">Technologies Used</h5>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/10 hover:bg-purple-600/20 text-white/80 hover:text-white rounded-full text-sm font-medium transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div>
          <h5 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">Key Achievements</h5>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, achIndex) => (
              <li key={achIndex} className="flex items-start text-white/70 text-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/50 transition-all duration-300"></div>
    </div>
  );

  return (
    <section 
      id="internships"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-grid-16" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-600/15 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}



        
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Internship Experience
            </span>
          </h2>
          <p className={`text-xl text-white/70 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Hands-on experience working with cutting-edge technologies in real-world projects
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-1 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
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

export default InternshipExperience;