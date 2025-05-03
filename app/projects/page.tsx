import ProjectsList from '../../components/ProjectsList';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { Project, ProjectSkills, Skills } from '@/types/project';

async function getProjects(): Promise<Project[]> {
  return directus.request(readItems('project', {
    sort: ['-end_date'], // 最新順
  })) as Promise<Project[]>;
}

async function getProject_Skills(): Promise<ProjectSkills[]> {
  return directus.request(readItems('project_skills')) as Promise<ProjectSkills[]>;
}

async function getSkills(): Promise<Skills[]> {
  return directus.request(readItems('skills')) as Promise<Skills[]>;
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  const project_skills = await getProject_Skills();
  const skillsList = await getSkills();
  const projectsWithSkills = projects.map(project => {
    const projectSkills: string[] = project_skills
      .filter(ps => ps.project_id === project.id)
      .map(ps => skillsList.find(s => s.id === ps.skills_id)?.name || '');
    return { ...project, skills: projectSkills };
  });
  return( 
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <ProjectsList initialProjects={projectsWithSkills} />
    </div>
);
}
