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
      className={`absolute top-1/2 -translate-y-1/2 ${position} z-20 w-14 h-14 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm rounded-full border-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 group shadow-xl hover:shadow-purple-500/25`}
      data-aos="fade"
      data-aos-duration="800"
    >
      <Icon className="w-6 h-6 text-purple-300 group-hover:text-white mx-auto group-hover:scale-110 transition-all duration-300" />
    </button>
  );
};

const SliderIndicators = ({ total, current, onIndicatorClick }) => {
  return (
    <div className="flex justify-center space-x-3 mt-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onIndicatorClick(index)}
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            index === current
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 scale-125 shadow-lg shadow-purple-500/50'
              : 'bg-gray-600/50 hover:bg-gray-500 hover:scale-110 border border-gray-500/30'
          }`}
        />
      ))}
    </div>
  );
};

const ProjectSlider = ({ projects = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const totalProjects = projects.length;

  // Responsive visible projects
  useEffect(() => {
    const updateVisibleProjects = () => {
      if (window.innerWidth < 768) {
        setVisibleProjects(1);
      } else if (window.innerWidth < 1280) {
        setVisibleProjects(2);
      } else {
        setVisibleProjects(3);
      }
    };

    updateVisibleProjects();
    window.addEventListener('resize', updateVisibleProjects);
    return () => window.removeEventListener('resize', updateVisibleProjects);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Infinite loop autoplay
  useEffect(() => {
    if (!isAutoPlaying || totalProjects === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= totalProjects) {
          return 0; // Reset to beginning for infinite loop
        }
        return nextIndex;
      });
    }, 4000); // Slightly slower for better viewing

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalProjects]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? totalProjects - 1 : newIndex;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
  }, [totalProjects]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex >= totalProjects ? 0 : newIndex;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
  }, [totalProjects]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
  }, []);

  const handleProjectClick = (project) => {
    navigate(`/projects/${project.slug}`);
  };

  const handleSeeMoreClick = () => {
    navigate('/projects');
  };

  if (totalProjects === 0) {
    return (
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">No projects available</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600/8 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
          <div className="relative inline-block mb-6">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Featured Projects
            </h2>
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce shadow-lg shadow-blue-500/50" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover innovative solutions and cutting-edge technologies in my portfolio
          </p>
        </div>

        {/* Enhanced Slider Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-sm border-2 border-gray-700/30 shadow-2xl p-6">
            {/* Gradient Borders */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-sm -z-10" />
            
            <div className="relative min-h-[520px] flex items-center">
              <div
                className="flex transition-all duration-700 ease-in-out w-full"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)`,
                }}
                ref={sliderRef}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0 px-4"
                    style={{ 
                      width: visibleProjects === 1 ? '100%' : 
                             visibleProjects === 2 ? '50%' : '33.333%'
                    }}
                  >
                    <ProjectCard
                      project={project}
                      onClick={() => handleProjectClick(project)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          {totalProjects > 1 && (
            <>
              <NavButton direction="prev" onClick={goToPrev} disabled={false} />
              <NavButton direction="next" onClick={goToNext} disabled={false} />
            </>
          )}

          {/* Pause/Play Indicator */}
          <div className="absolute top-4 right-4 z-20">
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse' 
                : 'bg-gray-400 shadow-lg shadow-gray-400/50'
            }`} />
          </div>
        </div>

        {/* Enhanced Indicators */}
        {totalProjects > 1 && (
          <SliderIndicators 
            total={totalProjects} 
            current={currentIndex} 
            onIndicatorClick={goToSlide} 
          />
        )}

        {/* Enhanced CTA Button */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <button
            onClick={handleSeeMoreClick}
            className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-8 text-lg font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 overflow-hidden border border-purple-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Explore All Projects
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="w-full bg-gray-700/30 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${((currentIndex + 1) / totalProjects) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Styles */}
      <style jsx>{`
        .bg-grid-16 {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ProjectSlider;