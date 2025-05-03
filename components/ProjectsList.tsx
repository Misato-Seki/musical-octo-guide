'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types/project';
import { formatDate } from '@/components/DateFormat';
import { GoChevronDown, GoChevronUp, GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
interface ProjectsListProps {
  initialProjects: Project[];
}

export default function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Left side */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
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

        <div className="space-y-4">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="border-b">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition"
              >
                <div>
                  <div className="text-xl font-semibold">{project.title}</div>
                  <div className="text-gray-500">{project.skills.join(' / ')}</div>
                  <div className="text-sm text-gray-400">
                    {project.category} project / {formatDate(project.start_date)} - {formatDate(project.end_date)}
                  </div>
                </div>
                <span className="text-3xl">{openIndex === idx ? <GoChevronUp /> : <GoChevronDown />}</span>
              </button>
              {openIndex === idx && (
                <div className="p-4 bg-gray-50">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${project.image}`}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="rounded-lg grayscale w-full h-auto object-cover"
                  />
                  <div className="flex gap-2 mt-4">
                    <a href={project.github_link} target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
                    <a href={project.demo_link} target="_blank" rel="noopener noreferrer"><GoLinkExternal size={24} /></a>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <div
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: project.description.replace(/\n/g, '<br>')
                          .replace(/<ul>/g, '<ul class="list-disc pl-4">')
                          .replace(/<li>/g, '<li class="">')
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 