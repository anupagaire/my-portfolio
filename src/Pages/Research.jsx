import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ResearchData } from '../data/researchdata.js';
import ResearchCard from '../components/ResearchCard';

const SearchSection = ({ searchTerm, onSearchChange }) => (
  <div className="mb-12">
    <div className="relative max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search research projects..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800 dark:text-white"
      />
    </div>
  </div>
);

const Research = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResearch, setFilteredResearch] = useState(ResearchData);

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Filter research based on search term
  useEffect(() => {
    const filtered = ResearchData.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredResearch(filtered);
  }, [searchTerm]);

  const handleProjectClick = (research) => {
    navigate(`/research/${research.slug}`);
  };

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>
      
      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto py-10 px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block mb-6">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Research
            </h1>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Guided Research Contributions
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore cutting-edge research projects spanning multiple disciplines, from artificial intelligence 
            to quantum computing, each contributing to the advancement of science and technology.
          </p>
          
          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {ResearchData.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Research Projects</div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <SearchSection
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Research Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredResearch.map((research, index) => (
            <div
              key={research.id}
              className="relative"
              style={{ animationDelay: `${index * 0.1}s`, animation: `fadeInUp 0.6s ease-out forwards` }}
            >
              <ResearchCard
                research={research}
                onClick={() => handleProjectClick(research)}
              />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredResearch.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No research projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              Try adjusting your search criteria
            </p>
          </div>
        )}

        {/* Back to Home Button */}
        <div className="text-center">
          <button
            onClick={handleBackHome}
            className="group relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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

export default Research;