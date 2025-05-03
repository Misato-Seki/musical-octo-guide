export interface Project {
  id: number;
  title: string;
  skills: string[];
  start_date: string;
  end_date: string;
  category: string;
  github_link: string;
  demo_link: string;
  image: string;
  description: string;
} 

export interface ProjectSkills {
  id: number;
  project_id: number;
  skills_id: number;
}

export interface Skills {
  id: number;
  name: string;
}