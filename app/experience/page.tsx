// import { ExperienceList } from '@/components/ExperienceList';
import { ExperienceCard } from '@/components/ExperienceCard';
import directus from '@/lib/directus';
import { Experience } from '@/types/experience';
import { readItems } from '@directus/sdk';

async function getExperience(): Promise<Experience[]> {
    return directus.request(readItems('experience', {
      sort: ['-start_date'], // 最新順
    })) as Promise<Experience[]>;
  }

export default async function ExperiencePage() {
    const experience = await getExperience();
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">My Experience</h1>
      {experience.map((exp) => (
        <ExperienceCard key={exp.company_school} experience={exp} />
      ))}
    </div>
  );
}
