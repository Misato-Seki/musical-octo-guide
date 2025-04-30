'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectsListProps {
  initialProjects: Project[];
}

export default function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const allSkills = Array.from(
    new Set(initialProjects.flatMap(project => project.skills))
  );

  const filteredProjects = selectedSkills.length === 0
    ? initialProjects
    : initialProjects.filter(project =>
        selectedSkills.every(skill => project.skills.includes(skill))
      );

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left side */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="w-full lg:w-1/2 min-w-[300px] p-8"
      >
        <div className="mb-6">
          <div className="relative">
            <select
              className="w-full p-2 border border-gray-300 rounded-md appearance-none"
              multiple={false}
              onChange={(e) => toggleSkill(e.target.value)}
            >
              <option value="">Choose skills</option>
              {allSkills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedSkills.map(skill => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1"
              >
                {skill}
                <span className="text-gray-500">×</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredProjects.map(project => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Right side */}
      <div className="relative w-full lg:w-1/2">
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed lg:absolute inset-0 bg-white p-8 overflow-y-auto z-50"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close project details"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <Image 
                  src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${selectedProject.image}`}
                  alt={selectedProject.title} 
                  width={800}
                  height={450}
                  className='rounded-lg grayscale w-full h-auto object-cover'
                />
                <p className="text-gray-600 mt-2">
                  {selectedProject.skills.join(' / ')}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {`${selectedProject.category} project / `}
                  <a 
                    href={selectedProject.github_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:underline"
                  >
                    github
                  </a>
                  {` / `}
                  <a 
                    href={selectedProject.demo_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:underline"
                  >
                    demo
                  </a>
                  {` / ${formatDate(selectedProject.start_date)} - ${formatDate(selectedProject.end_date)}`}
                </p>
              </div>

              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <div className="text-gray-700 space-y-4">
                  <div dangerouslySetInnerHTML={{ 
                    __html: selectedProject.description.replace(/\n/g, '<br>')
                      .replace(/<ul>/g, '<ul class="list-disc pl-4">')
                      .replace(/<li>/g, '<li class="">')
                  }} />
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 