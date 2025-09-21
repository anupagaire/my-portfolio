import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from '../Components/ProjectCard';
import { projects } from '../data/projectdata.js';

const technology_categories = {
  'All': [],
  'MERN Stack': ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
  'Python/AI/ML': ['Python', 'SpaCy', 'NLP', 'Machine Learning', 'CNN', 'TensorFlow', 'OpenCV', 'SymPy'],
  'Web Development': ['PHP', 'HTML', 'CSS', 'MySQL', 'WordPress'],
  'System Programming': ['C++', 'C'],
  'UI Framework': ['PyQt5']
};

const SearchAndFilterSection = ({ searchTerm, onSearchChange, selectedCategory, onCategoryChange }) => (
  <div className="mb-12 space-y-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    {/* Search Bar */}
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search projects by title..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-6 py-4 bg-gray-900/80 backdrop-blur-sm border-2 border-gray-700/50 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 transition-all duration-300 text-white placeholder-gray-400 text-lg shadow-lg hover:shadow-purple-500/10"
      />
    </div>

    {/* Technology Category Filter */}
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center gap-2 text-gray-300">
        <Filter className="w-5 h-5" />
        <span className="font-medium">Filter by Technology Stack</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
        {Object.keys(technology_categories).map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-500 shadow-lg shadow-purple-500/25'
                : 'bg-gray-800/60 text-gray-300 border-gray-600/50 hover:bg-gray-700/60 hover:border-gray-500 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const ProjectSupervisor = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({ duration: 1000 });
    }, 100);

    setIsVisible(true);
    return () => clearTimeout(initAOS);
  }, []);

  // Filter projects based on search term and category
  useEffect(() => {
    let filtered = projects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Filter by technology category
    if (selectedCategory !== 'All') {
      const categoryTechs = technology_categories[selectedCategory];
      filtered = filtered.filter((project) =>
        project.technologies.some((tech) =>
          categoryTechs.some((categoryTech) =>
            tech.toLowerCase().includes(categoryTech.toLowerCase())
          )
        )
      );
    }

    // Sort alphabetically
    filtered.sort((a, b) => a.title.localeCompare(b.title));

    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory]);

  const handleProjectClick = (project) => {
    // Always navigate to project detail page
    navigate(`/projects/${project.slug}`);
  };

  const handleBackHome = () => navigate('/');

  const getTechStackStats = () => {
    const stats = {};
    Object.keys(technology_categories).forEach(category => {
      if (category === 'All') return;
      const categoryTechs = technology_categories[category];
      const count = projects.filter(project =>
        project.technologies.some(tech =>
          categoryTechs.some(categoryTech =>
            tech.toLowerCase().includes(categoryTech.toLowerCase())
          )
        )
      ).length;
      stats[category] = count;
    });
    return stats;
  };

  const techStats = getTechStackStats();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      </div>

      <div className="w-full max-w-7xl mx-auto py-16 px-6 relative z-10">
        <div
          className={`text-center mb-16 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="relative inline-block mb-8">
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Projects
            </h1>
            <div className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce shadow-lg shadow-blue-500/50" />
          </div>
          
         

          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <div className="text-4xl font-bold text-purple-400">{projects.length}</div>
              <div className="text-sm text-gray-400">Total Projects</div>
            </div>
            {Object.entries(techStats).map}
          </div>
        </div>

        <SearchAndFilterSection
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Results Info */}
        {(searchTerm || selectedCategory !== 'All') && (
          <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="800">
            <p className="text-gray-400">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
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
          <div className="text-center py-20" data-aos="fade-up" data-aos-duration="500">
            <div className="bg-gray-900/50  rounded-2xl p-12 border border-gray-700/50 max-w-md mx-auto">
              <BookOpen className="w-20 h-20 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">No projects found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search criteria or selecting a different technology stack
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Back Home Button */}
        <div className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <button
            onClick={handleBackHome}
            className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 overflow-hidden border border-purple-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </span>
          </button>
        </div>
      </div>

      {/* Animation Styles */}
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

export default ProjectSupervisor;