import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const ProjectCard = ({ title, description, image, tags, demoUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={demoUrl}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <ExternalLink size={18} className="mr-1" /> Demo
          </a>
          <a
            href={githubUrl}
            className="flex items-center text-gray-600 hover:text-gray-700"
          >
            <Github size={18} className="mr-1" /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;