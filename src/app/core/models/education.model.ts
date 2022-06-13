import { EducationType } from './education-type.model';

export interface Education {
  id: EducationType;
  field: string;
  specialty: string | null,
  title: string;
  school: string;
  start: string;
  description: string;
  end: string;
  achievements: string[];
}
