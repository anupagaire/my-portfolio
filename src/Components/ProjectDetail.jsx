import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code, CheckCircle, Clock, Github } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects } from '../data/projectdata.js';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.slug === slug);
    setProject(foundProject);
    
    const initAOS = setTimeout(() => {
      AOS.init({ duration: 1000 });
    }, 100);

    return () => clearTimeout(initAOS);
  }, [slug]);

  const handleBackClick = () => {
    navigate('/projects');
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'from-green-500 to-emerald-500';
      case 'planning':
        return 'from-yellow-500 to-orange-500';
      case 'in progress':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <CheckCircle className="w-5 h-5" />;
      case 'planning':
      case 'in progress':
        return <Clock className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/projects')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      

      <div className="w-full max-w-6xl mx-auto py-12 px-6 relative z-10">
        {/* Back Button */}
        <div className="mb-8" data-aos="fade-right" data-aos-duration="800">
          <button
            onClick={handleBackClick}
            className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-700/50 hover:border-gray-600"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </button>
        </div>

        <div className="mb-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${getStatusColor(project.status)} text-white font-medium`}>
                      {getStatusIcon(project.status)}
                    </div>
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
                      <Github className="w-5 h-5" />
                      View Project Link
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              My Contribution
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.contribution}
            </p>
          </div>
        </div>

      

        {/* Detailed Description */}
        <div className="mb-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.about}
            </p>
          </div>
        </div>

        
  <div className="mb-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
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

        {/* Key Features */}
        <div className="mb-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
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

export default ProjectDetail;