import { ProjectType } from '../helpers/projects';

export interface Project {
  id: ProjectType;
  name: string;
  type: string;
  link: string;

  image: string;
  description: string;
  technologies: string[];
}
