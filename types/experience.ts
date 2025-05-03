export type Experience = {
  category: 'education' | 'work';
  position_degree: string;
  company_school: string;
  start_date: string;
  end_date?: string;
  description: string;
}; 