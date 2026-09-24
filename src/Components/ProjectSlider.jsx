import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projectdata.js';

const MAX_ITEMS = 4; // Home ma kati wota dekhaune

const ProjectSection = () => {
  // featured: true bhayeka pahile, tespachhi baaki. Kunai featured chhaina bhane suruka 4 wota.
  const list = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ].slice(0, MAX_ITEMS);

  if (list.length === 0) return null;

  return (
    <section id="projects" className="bg-white text-black py-20 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between border-b-2 border-black pb-3 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase mb-1">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
          </div>

          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-black hover:text-blue-700 transition-colors"
          >
            See all
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <ProjectCard key={`${p.slug}-${i}`} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;