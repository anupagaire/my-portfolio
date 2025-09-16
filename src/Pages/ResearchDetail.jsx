import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ResearchData } from '../data/researchdata.js';

const ResearchDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const research = ResearchData.find((r) => r.slug === slug);

  if (!research) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Research Not Found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4">
      <button
        onClick={() => navigate('/')}
        className="mb-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
      >
        Back to Home
      </button>
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
        <img
          src={research.image}
          alt={research.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {research.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {research.description}
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Authors
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {research.authors.join(', ')}
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Status: <span className="font-semibold">{research.status}</span>
        </p>
        {research.publicationDate && (
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Published: <span className="font-semibold">{new Date(research.publicationDate).toLocaleDateString()}</span>
          </p>
        )}
        <a
          href={research.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
        >
          View Publication
        </a>
      </div>
    </div>
  );
};

export default ResearchDetail;