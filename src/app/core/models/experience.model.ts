import { ExperienceType } from '../helpers/experience';

export interface Experience {
  id: ExperienceType;
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
  technologies: string[];
}
