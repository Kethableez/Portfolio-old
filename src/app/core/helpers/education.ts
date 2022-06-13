import { Education } from '../models/education.model';
import { EducationType } from '../models/education-type.model';

export const educations: Education[] = [
  {
    id: EducationType.TECHNICIAN,
    field: 'field.technician',
    specialty: null,
    title: 'title.technician',
    school: 'school.highschool',
    start: 'start.technician',
    end: 'end.technician',
    description: 'description.technician',
    achievements: [
      'achievement.technician.1',
      'achievement.technician.2',
      'achievement.technician.3',
    ]
  },
  {
    id: EducationType.ENGINEER,
    field: 'field.engineer',
    specialty: 'specialty.engineer',
    title: 'title.engineer',
    school: 'school.university',
    start: 'start.engineer',
    end: 'end.engineer',
    description: 'description.engineer',
    achievements: [
      'achievement.engineer.1'
    ]
  },
  {
    id: EducationType.MASTER,
    field: 'field.master',
    specialty: 'specialty.master',
    title: 'title.master',
    school: 'school.university',
    start: 'start.master',
    end: 'end.master',
    description: 'description.master',
    achievements: [

    ]
  },
]
