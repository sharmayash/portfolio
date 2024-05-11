
type ProjectProps = {
  id: string
  live_link?: string
  github_link?: string
  project_name_1: string
  project_name_2: string
  project_points: string[]
  project_description?: string,
}

export interface CompanyProps {
  id: string;
  key: number;
  time_period: string,
  company_desc: string;
  company_name: string;
  projects: ProjectProps[];
  position: string;
  role?: string;
}

export interface SocialProps {
  name: string;
  link: string;
  image: string;
}
