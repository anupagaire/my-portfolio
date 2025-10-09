import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ResearchData } from '../data/researchdata.js';

const ResearchDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const research = ResearchData.find((r) => r.slug === slug);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'from-green-700 to-green-900';
      case 'In Review': return 'from-blue-700 to-blue-900';
      case 'Ongoing': return 'from-yellow-700 to-yellow-900';
      case 'Completed': return 'from-teal-700 to-teal-900';
      case 'Under Review': return 'from-blue-600 to-blue-800';
      default: return 'from-gray-700 to-gray-900';
    }
  };

  if (!research) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Research Not Found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="group relative bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4 bg-black">
      <button
        onClick={() => navigate('/')}
        className="group mb-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        Back to Home
      </button>
      <div className="bg-gray-800 rounded-3xl shadow-lg p-8 md:p-12" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={research.image}
              alt={research.title}
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {research.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {research.description}
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Authors
              </h3>
              <div className="flex flex-wrap gap-2">
                {research.authors.map((author, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-gradient-to-r from-gray-700 to-gray-900 border border-gray-600 text-gray-300 text-xs rounded-lg font-medium"
                  >
                    {author}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span
                className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(research.status)} text-white text-xs rounded-full font-semibold`}
              >
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
              className="inline-flex items-center bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              View Publication
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;