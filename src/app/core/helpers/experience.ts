export enum ExperienceType {
  COMARCH = 'comarch',
  FIVERR = 'fiverr',
}

export const experiences = [
  {
    id: ExperienceType.COMARCH,
    position: 'position.comarch',
    company: 'company.comarch',
    start: 'start.comarch',
    end: 'end.comarch',
    description: 'description.comarch',
    technologies: ['technology.angular', 'technology.java'],
  },

  {
    id: ExperienceType.FIVERR,
    position: 'position.fiverr',
    company: 'company.fiverr',
    start: 'start.fiverr',
    end: 'end.fiverr',
    description: 'description.fiverr',
    technologies: ['technology.angular', 'technology.html', 'technology.css'],
  },
];
