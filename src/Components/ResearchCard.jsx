import React from 'react';
import { Eye, ArrowRight, ExternalLink } from 'lucide-react';

const ResearchCard = ({ research, onClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'from-green-500 to-emerald-600';
      case 'In Review': return 'from-blue-500 to-blue-600';
      case 'Ongoing': return 'from-yellow-500 to-yellow-600';
      case 'Completed': return 'from-teal-500 to-teal-600';
      case 'Under Review': return 'from-blue-400 to-blue-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const handleCardClick = () => {
    onClick && onClick(research);
  };

  return (
    <div
      className="group relative w-full h-[480px] cursor-pointer transform-gpu transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
      onClick={handleCardClick}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      {/* Main Card Container */}
      <div className="relative w-full h-full bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/40 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden">
        {/* Image Section */}
        <div className="relative overflow-hidden h-56">
          <img
            src={research.image}
            alt={research.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 text-white font-medium">
              <Eye className="w-5 h-5" />
              View Details
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 h-[224px] flex flex-col justify-between">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
              {research.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4 line-clamp-3 leading-relaxed">
              {research.description}
            </p>
            <p className="text-xs text-gray-400 mb-2">
              {research.publicationDate ? `Published: ${new Date(research.publicationDate).toLocaleDateString()}` : 'Not yet published'}
            </p>
          </div>

          {/* Authors and Status */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {research.authors.slice(0, 4).map((author, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 text-xs rounded-lg font-medium backdrop-blur-sm hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300"
                >
                  {author}
                </span>
              ))}
              {research.authors.length > 4 && (
                <span className="px-2.5 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg font-medium border border-gray-600/50">
                  +{research.authors.length - 4}
                </span>
              )}
            </div>

            <div className="flex justify-between items-center pt-2">
              <a
                href={research.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300"
                onClick={(e) => e.stopPropagation()} // Prevent card click from triggering
              >
                <span className="mr-2">View Details</span>
                <ExternalLink className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(research.status)} text-white text-xs rounded-full font-semibold`}>
                {research.status}
              </span>
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

export default ResearchCard;