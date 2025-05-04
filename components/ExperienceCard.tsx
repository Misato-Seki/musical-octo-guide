"use client";
import { Experience } from '../types/experience';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { formatDate } from '@/components/DateFormat';
import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from "react-icons/go";

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const icon = experience.category === 'education' ? 
    <FaGraduationCap className="w-6 h-6 text-gray-900" /> : 
    <FaBriefcase className="w-6 h-6 text-gray-900" />;

  const [open, setOpen] = useState(false);

  return (
    <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
    <div className="flex gap-4 mb-8">
      <div className="mt-1">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900">
          {experience.position_degree}
        </h3>
        <p className="text-lg text-gray-700">
          {experience.company_school}
        </p>
        <p className="text-sm text-gray-500 mb-2">
          {formatDate(experience.start_date)} - {formatDate(experience.end_date)}
        </p>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-gray-600 hover:text-black focus:outline-none mb-2"
        >
          <span>View Details</span>
          {open ? <GoChevronUp /> : <GoChevronDown />}
        </button>
        {open && (
          <p className="text-gray-600">
            {experience.description}
          </p>
        )}
      </div>
    </div>
    </motion.div>
  );
}; 