import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from '../Components/ProjectCard';
import { projects } from '../data/projectdata.js';

const SearchSection = ({ searchTerm, onSearchChange }) => (
  <div className="mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <div className="relative max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 bg-gray-800/90 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
      />
    </div>
  </div>
);

const ProjectSupervise = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('alphabetical'); // NEW
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({ duration: 1000 });
    }, 100);

    setIsVisible(true);
    return () => clearTimeout(initAOS);
  }, []);

  // Filter + Sort
  useEffect(() => {
    const filtered = projects
      .filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
      .sort((a, b) => {
        if (sortOption === 'alphabetical') {
          return a.title.localeCompare(b.title);
        }
        if (sortOption === 'techCount') {
          // Descending: more technologies first
          return b.technologies.length - a.technologies.length;
        }
        return 0;
      });

    setFilteredProjects(filtered);
  }, [searchTerm, sortOption]);

  const handleProjectClick = (project) => {
    if (!project.projectUrl) {
      navigate(`/projects/${project.slug}`);
    }
  };

  const handleBackHome = () => navigate('/');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000" />
      </div>

      <div className="w-full max-w-7xl mx-auto py-20 px-4 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-10 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="relative inline-block mb-15">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Projects
            </h1>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce" />
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore innovative projects spanning multiple domains, from e-commerce solutions to IoT systems,
            each showcasing cutting-edge technology and collaboration.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{projects.length}</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex justify-end mb-6" data-aos="fade-up" data-aos-duration="1000">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-gray-800/90 text-white border border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
          >
            <option value="alphabetical">Sort: A → Z</option>
            <option value="techCount">Sort: By # of Technologies</option>
          </select>
        </div>

        {/* Search */}
        <SearchSection searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 mb-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${index * 100}`}
            >
              <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16" data-aos="fade-up" data-aos-duration="1000">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Back Home Button */}
        <div className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <button
            onClick={handleBackHome}
            className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-9 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </span>
          </button>
        </div>
      </div>

      {/* blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
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
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
};

export default ProjectSupervise;
