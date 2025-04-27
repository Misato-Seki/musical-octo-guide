// 'use client'
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

async function getSkills() {
  return directus.request(readItems('skills'));
}

export default async function Home() {
  const skills = await getSkills();
  
  return (
    <div className="mt-50">
      {skills.map((skill) => (
        <div key={skill.id}>
          <p>{skill.category}</p>
          <p>{skill.name}</p>
        </div>
      ))}
      
    </div>
  );
}
