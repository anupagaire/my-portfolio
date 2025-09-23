import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code, CheckCircle, Clock, Github } from 'lucide-react';
import { projects } from '../data/projectdata.js';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.slug === slug);
    setProject(foundProject);
      window.scrollTo(0, 0); // scroll to top when the project loads

  }, [slug]);

  const handleBackClick = () => {
    navigate('/projects');
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/projects')}
            className="bg-purple-600 text-white mb-5 px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="w-full max-w-9xl mx-auto py-12 px-6 relative z-10">
        {/* Back Button */}
        <div className="mb-3">
          <button
            onClick={handleBackClick}
            className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 bg-gray-800/50 px-9 py-5 rounded-xl border border-gray-700/50 mb-5"  style={{ marginTop: "1cm" }}

          >
            <ArrowLeft className="w-5 h-5 " />
            Back to Projects
          </button>
        </div>

        {/* Main Info */}
        <div className="mb-12">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 ">
                    {project.title}
                  </h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 font-medium">
                      {project.category}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                     
                      View Project Link
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution */}
        <div className="mb-12">
          <div className="bg-gray-900/60  rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             
              My Contribution
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.contribution}
            </p>
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-12">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.about}
            </p>
          </div>
        </div>

        {/* Technologies */}
<div className="mb-12">
  <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Code className="w-6 h-6 text-purple-400" />
      Technologies Used
    </h2>
    <div className="flex flex-wrap gap-3">
      {project.technologies.map((tech, index) => (
        <div
          key={index}
          className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl text-purple-300 font-medium backdrop-blur-sm hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300"
        >
          {tech}
        </div>
      ))}
    </div>
  </div>
</div>

{project.screenshots && project.screenshots.length > 0 && (
  <div className="mb-12">
    <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
      <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.screenshots.map((screenshot, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={screenshot}
              alt={`Screenshot ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)}


        {/* Key Features */}
        <div className="mb-12">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/40 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
