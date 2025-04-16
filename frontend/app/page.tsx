'use client'
import { useEffect, useState } from "react";

interface skills {
  id: number
  name: string
}

export default function Home() {
  const [skills, setSkills] = useState<skills[]>([])
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/skills`)
    .then(response => response.json())
    .then(data => setSkills(data))
  },[])
  return (
    <div className="mt-50">
      {skills.map((skill) => (
        <div key={skill.id}>
          <p>{skill.name}</p>
        </div>
      ))}
      
    </div>
  );
}
