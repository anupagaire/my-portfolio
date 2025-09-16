import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  const handleCardClick = () => {
    if (project.projectUrl) {
      window.open(project.projectUrl, '_blank', 'noopener,noreferrer');
    } else {
      onClick && onClick(project);
    }
  };

  return (
    <div
      className="book-card flex-shrink-0 w-80 h-96 relative cursor-pointer transform-gpu transition-all duration-500 hover:-translate-y-2 hover:rotate-y-1"
      onClick={handleCardClick}
      style={{ transformStyle: 'preserve-3d' }}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="card-inner w-full h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-5 h-48 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm text-white/70 mb-3 line-clamp-3">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
              <span className="mr-1">{project.projectUrl ? 'Visit Project' : 'View Details'}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;