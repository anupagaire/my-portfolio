import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const statusStyle = {
  Completed: 'text-green-700 border-green-600',
  'In Progress': 'text-amber-700 border-amber-600',
  Planning: 'text-gray-600 border-gray-400',
};

const ProjectCard = ({ project }) => {
  const Wrapper = project.projectUrl ? 'a' : 'div';
  const wrapperProps = project.projectUrl
    ? { href: project.projectUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-black hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 border-b border-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase">
            {project.category}
          </span>
          {project.status && (
            <span
              className={`text-[11px] font-medium border rounded px-1.5 py-px ${
                statusStyle[project.status] || statusStyle.Planning
              }`}
            >
              {project.status}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-black leading-snug line-clamp-2 group-hover:underline underline-offset-4">
          {project.title.trim()}
        </h3>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <p className="mt-4 text-xs text-gray-500">
          {project.technologies.slice(0, 4).join(' · ')}
          {project.technologies.length > 4 && ` · +${project.technologies.length - 4}`}
        </p>

        {project.projectUrl && (
          <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-black">
            View project
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        )}
      </div>
    </Wrapper>
  );
};

export default ProjectCard;