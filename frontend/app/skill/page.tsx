// 'use client'
// import directus from '@/lib/directus';
// import { readItems } from '@directus/sdk'

// async function getSkills() {
//   return directus.request(readItems('skills'));
// }

import React from 'react';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      {
        name: 'React',
        projects: [
          'Virtual Farmers Market',
          'Centria Hub',
          'Meal Tracker',
        ],
      },
      // 必要に応じて他のスキルを追加
      { name: 'React', projects: ['Virtual Farmers Market', 'Centria Hub', 'Meal Tracker'] },
      { name: 'React', projects: ['Virtual Farmers Market', 'Centria Hub', 'Meal Tracker'] },
      { name: 'React', projects: ['Virtual Farmers Market', 'Centria Hub', 'Meal Tracker'] },
    ],
  },
  {
    category: 'BackEnd',
    skills: [
      {
        name: 'Python',
        projects: [
          'Virtual Farmers Market',
          'Centria Hub',
          'Meal Tracker',
        ],
      },
      { name: 'React', projects: ['Virtual Farmers Market', 'Centria Hub', 'Meal Tracker'] },
      { name: 'React', projects: ['Virtual Farmers Market', 'Centria Hub', 'Meal Tracker'] },
      { name: 'React', projects: ['Virtual Farmers Market', 'Centria Hub', 'Meal Tracker'] },
    ],
  },
  {
    category: 'Others',
    skills: [
      { name: 'React', projects: ['Virtual Farmers Market', 'Centria Hub', 'Meal Tracker'] },
      { name: 'React', projects: ['Virtual Farmers Market', 'Centria Hub', 'Meal Tracker'] },
      { name: 'React', projects: ['Virtual Farmers Market', 'Centria Hub', 'Meal Tracker'] },
    ],
  },
];

export default function Skill() {
//   const skills = await getSkills();
  
  return (
    <div className="px-24 py-12">
      {skillsData.map((section) => (
        <div key={section.category} className="mb-12">
          <h2 className="text-2xl font-bold mb-8">{section.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 min-h-[150px] flex flex-col justify-between"
              >
                <div>
                  <span className="font-bold text-lg">{skill.name}</span>
                  <ul className="list-disc list-inside mt-2 text-base">
                    {skill.projects.map((project, i) => (
                      <li key={i}>{project}</li>
                    ))}
                  </ul>
                </div>
                <a href="#" className="mt-4 text-sm underline">View all projects</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
