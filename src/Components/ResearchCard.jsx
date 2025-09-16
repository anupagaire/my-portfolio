import React from 'react';
import { Eye } from 'lucide-react';

const ResearchCard = ({ research, onClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'bg-gradient-to-b from-green-500 to-emerald-600';
      case 'In Review': return 'bg-gradient-to-b from-blue-500 to-blue-600';
      case 'Ongoing': return 'bg-gradient-to-b from-yellow-500 to-yellow-600';
      case 'Completed': return 'bg-gradient-to-b from-teal-500 to-teal-600';
      default: return 'bg-gradient-to-b from-gray-500 to-gray-600';
    }
  };

  return (
    <div 
      className="book-card flex-shrink-0 w-80 h-96 relative cursor-pointer transform-gpu transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
      onClick={() => onClick(research)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Book Spine with Status Color */}
      <div className={`absolute -left-1 top-0 w-4 h-full ${getStatusColor(research.status)} rounded-l-md shadow-inner transform transition-all duration-300 group-hover:w-5`}></div>
      
      {/* Rotated Title on Spine */}
      <div className="absolute -left-6 top-1/2 transform -rotate-90 translate-y-1/2 origin-center">
        <h3 className="text-white text-xs font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 opacity-50 group-hover:opacity-80 transition-all duration-300">
          {research.title}
        </h3>
      </div>
      
      <div className="card-inner w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="overflow-hidden h-48">
          <img 
            src={research.image} 
            alt={research.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="p-5 h-48 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
              {research.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
              {research.description}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              {research.publicationDate ? `Published: ${new Date(research.publicationDate).toLocaleDateString()}` : 'Not yet published'}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {research.authors.slice(0, 3).map((author, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-xs rounded-full font-medium"
              >
                {author}
              </span>
            ))}
            {research.authors.length > 3 && (
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
                +{research.authors.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <span className={`px-3 py-1 ${getStatusColor(research.status).replace('bg-gradient-to-b', 'bg-gradient-to-r')} text-white text-xs rounded-full font-semibold`}>
              {research.status}
            </span>
            <Eye className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
          </div>
        </div>
      </div>
      
      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-300 dark:group-hover:border-purple-600 rounded-xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ResearchCard;