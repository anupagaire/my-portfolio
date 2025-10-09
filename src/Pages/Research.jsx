import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ResearchData } from '../data/researchdata.js';

// Technology categories for filtering
const technology_categories = {
  'All': [],
  
};

const ResearchHeader = ({ totalProjects,  }) => (
  <div
    className="relative text-center mb-16 py-10  rounded-3xl"
  >
    <div className="absolute   " />
    <div className="relative inline-block">
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent ">
        Research
      </h1>
      <div className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" />
      <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce shadow-lg shadow-blue-500/50" />
    </div>
  
    <div className="flex flex-wrap justify-center gap-8 mt-3">
      <div className="text-center bg-gray-900/50  rounded-xl p-2 border border-gray-700/50">
        <div className="text-4xl font-bold text-purple-400">{totalProjects}</div>
        <div className="text-sm text-gray-400">Total Research Projects</div>
      </div>
    </div>
  </div>
);

const SearchAndFilterSection = ({ searchTerm, onSearchChange,  }) => (
  <div className="mb-12 space-y-6">
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search my research ..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-6 py-4 bg-gray-900/80 backdrop-blur-sm border-2 border-gray-700/50 rounded-2xl   text-white placeholder-gray-400 text-lg shadow-lg hover:shadow-purple-500/10"
      />
    </div>
  </div>
);

const ResearchItem = ({ research, onClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'from-green-700 to-green-900';
      case 'In Review': return 'from-blue-900 to-blue-900';
      case 'Ongoing': return 'from-yellow-700 to-yellow-900';
      case 'Completed': return 'from-teal-700 to-teal-900';
      
      default: return 'from-gray-700 to-gray-900';
    }
  };

  return (
    <div
      className="group relative bg-gray-800 rounded-2xl shadow-lg  mb-8 p-6 cursor-pointer"
      onClick={() => onClick(research)}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/3 h-64 overflow-hidden rounded-lg">
          <img
            src={research.image}
            alt={research.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-3">
            {research.title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-3">
            {research.description}
          </p>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white">Authors</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {research.authors.map((author, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-blue-300 border border-gray-600  text-xs text-black rounded-lg font-medium "
                >
                  {author}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(research.status)} text-white  rounded-full `}>
                {research.status}
              </span>
              <p className="text-sm text-gray-400">
                {research.publicationDate ? `Published: ${new Date(research.publicationDate).toLocaleDateString()}` : 'Not yet published'}
              </p>
            </div>
            <a
              href={research.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" items-center text-gray-300  "
              onClick={(e) => e.stopPropagation()}
            >
              View Publication
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Research Component
const Research = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredResearch, setFilteredResearch] = useState(ResearchData);

 
  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({ duration: 1000 });
    }, 100);
    setIsVisible(true);
    return () => clearTimeout(initAOS);
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = ResearchData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.authors.some((author) =>
            author.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          (item.technologies && item.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          ))
      );
    }

   
    // Filter by technology category
    if (selectedCategory !== 'All') {
      const categoryTechs = technology_categories[selectedCategory];
      filtered = filtered.filter((item) =>
        item.technologies && item.technologies.some((tech) =>
          categoryTechs.some((categoryTech) =>
            tech.toLowerCase().includes(categoryTech.toLowerCase())
          )
        )
      );
    }

    setFilteredResearch(filtered);
  }, [searchTerm, selectedCategory]);

  
  const handleResearchClick = (research) => {
    navigate(`/research/${research.slug}`);
  };

  const handleBackHome = () => {
    navigate('/');
  };

  const getTechStackStats = () => {
    const stats = {};
    Object.keys(technology_categories).forEach((category) => {
      if (category === 'All') return;
      const categoryTechs = technology_categories[category];
      const count = ResearchData.filter((research) =>
          research.technologies.some((tech) =>
          categoryTechs.some((categoryTech) =>
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

      <div className="w-full max-w-7xl mx-auto py-16 px-6 relative z-10">
        {/* Research Header */}
        <div className={`transform transition-all  ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <ResearchHeader totalProjects={ResearchData.length} techStats={techStats} />
        </div>

        {/* Search and Filter Section */}
        <SearchAndFilterSection
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Results Info */}
        {(searchTerm || selectedCategory !== 'All') && (
          <div className="text-center mb-8" data-aos="fade-up">
            <p className="text-gray-400">
              Showing {filteredResearch.length} research project{filteredResearch.length !== 1 ? 's' : ''}
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
        )}

        {/* Research List */}
        <div className="mb-16">
          {filteredResearch.map((research, index) => (
            <div
              key={research.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <ResearchItem research={research} onClick={() => handleResearchClick(research)} />
            </div>
          ))}
        </div>

        {filteredResearch.length === 0 && (
          <div className="text-center py-20" data-aos="fade-up">
            <div className="bg-gray-900/50 rounded-2xl p-12 border border-gray-700/50 max-w-md mx-auto">
              <BookOpen className="w-20 h-20 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                No research projects found
              </h3>
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

        {/* Back to Home Button */}
        <div className="text-center" data-aos="fade-up">
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

export default Research;