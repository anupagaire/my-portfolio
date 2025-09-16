import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';

const NavButton = ({ direction, onClick, disabled }) => {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  const position = direction === 'prev' ? 'left-4' : 'right-4';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 ${position} z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 group`}
      data-aos="fade"
      data-aos-duration="800"
    >
      <Icon className="w-6 h-6 text-white mx-auto group-hover:scale-110 transition-transform duration-300" />
    </button>
  );
};

const SliderIndicators = ({ total, current, onIndicatorClick }) => {
  return (
    <div className="flex justify-center space-x-3 mt-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onIndicatorClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === current
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 scale-125 shadow-lg'
              : 'bg-white/20 hover:bg-white/30 hover:scale-110'
          }`}
        />
      ))}
    </div>
  );
};

const ProjectSlider = ({ projects = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const totalProjects = projects.length;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || totalProjects === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProjects);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalProjects]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    setIsAutoPlaying(false);
  }, [totalProjects]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
    setIsAutoPlaying(false);
  }, [totalProjects]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  const handleProjectClick = (project) => {
    navigate(`/projects/${project.id}`);
  };

  const handleSeeMoreClick = () => {
    navigate('/projects');
  };

  return (
    <section
      id="projects"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-grid-16" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-600/15 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore projects that showcase my skills and expertise across various domains
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
          <div
            className="flex transition-transform duration-500 ease-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (320 + 32)}px)` }}
            ref={sliderRef}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
          {totalProjects > 1 && (
            <>
              <NavButton direction="prev" onClick={goToPrev} disabled={totalProjects <= 1} />
              <NavButton direction="next" onClick={goToNext} disabled={totalProjects <= 1} />
            </>
          )}
        </div>

        {totalProjects > 1 && (
          <SliderIndicators total={totalProjects} current={currentIndex} onIndicatorClick={goToSlide} />
        )}

        <div className="text-center mt-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <button
            onClick={handleSeeMoreClick}
            className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none py-3 px-7 text-lg font-semibold rounded-2xl cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              View All Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </button>
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

export default ProjectSlider;