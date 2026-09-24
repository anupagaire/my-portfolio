import React, { useState, useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../Components/ProjectCard';
import { projects } from '../data/projectdata.js';

const Projects = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-12">
        <header className="mb-8 border-b-2 border-black pb-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="mt-2 text-gray-600">{projects.length} projects</p>
        </header>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                active === c
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-black'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={`${p.slug}-${i}`} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-16 text-gray-500">No projects found.</p>
        )}

        <div className="mt-12">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;