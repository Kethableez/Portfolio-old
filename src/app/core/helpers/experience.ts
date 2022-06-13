import { Experience } from '../models/experience.model';

export enum ExperienceType {
  COMARCH = 'comarch',
  FIVERR = 'fiverr',
}

export const experiences: Experience[] = [
  {
    id: ExperienceType.COMARCH,
    position: 'position.comarch',
    company: 'company.comarch',
    start: 'start.comarch',
    end: 'end.comarch',
    description: 'description.comarch',
    technologies: ['technology.angular', 'technology.java', 'technology.git'],
  },

  {
    id: ExperienceType.FIVERR,
    position: 'position.fiverr',
    company: 'company.fiverr',
    start: 'start.fiverr',
    end: 'end.fiverr',
    description: 'description.fiverr',
    technologies: ['technology.angular', 'technology.html', 'technology.css', 'technology.git'],
  },
];
