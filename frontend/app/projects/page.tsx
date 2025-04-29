'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types/project';

const projects: Project[] = [
  {
    id: 1,
    title: 'Virtual Farmers Market',
    skills: ['React', 'Tailwind', 'Next.js'],
    period: '2024.9 - 2024.12',
    type: 'Team Project',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://demo.com',
    imageUrl: '/VFM.png',
    overview: 'Train Tracker is an application that displays train locations on a map based on data retrieved from the DigiTraffic API.',
    keyFeatures: [
      'Retrieve train location data from the DigiTraffic API',
      'Display train locations on a map',
      'Auto-update train locations',
      'Display detailed train information (Train No, Speed, Train Type, Train Category)',
      'Search for a train by train number or city name'
    ],
    technicalArchitecture: [
      'Front-end: React, Next.js(App Router), TypeScript, TailwindCSS, Mapbox',
      'Back-end: Next.js API Routes (Integration with the DigiTraffic API)',
      'Data Source: DigiTraffic API',
      'Deployment: Vercel'
    ],
  },
  // Add more projects here
];

export default function ProjectsPage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allSkills = Array.from(
    new Set(projects.flatMap(project => project.skills))
  );

  const filteredProjects = selectedSkills.length === 0
    ? projects
    : projects.filter(project =>
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
    <div className="flex min-h-screen bg-white">
      {/* Left side - Project List */}
      <div className="w-1/2 p-8 border-r border-gray-200">
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
              {/* <p className="text-sm text-gray-600">
                {project.skills.join(' / ')}
              </p> */}
            </button>
          ))}
        </div>
      </div>

      {/* Right side - Project Details */}
      <div className="w-1/2 relative">
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-0 bg-white p-8 overflow-y-auto"
            >
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <Image 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  width={800}
                  height={450}
                  className='rounded-lg grayscale w-full h-auto object-cover'
                />
                <p className="text-gray-600">
                  {selectedProject.skills.join(' / ')}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {`${selectedProject.type} / GitHub / Demo / ${selectedProject.period}`}
                </p>
              </div>

              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-gray-700">{selectedProject.overview}</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedProject.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Technical Architecture</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedProject.technicalArchitecture.map((tech, index) => (
                    <li key={index} className="text-gray-700">{tech}</li>
                  ))}
                </ul>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
