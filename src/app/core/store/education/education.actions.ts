import { createAction, props } from '@ngrx/store';
import { EducationWithId } from '../../models/education-with-id.model';
import { Education } from '../../models/education.model';

export const initEducation = createAction('[Education] Init Education');

export const initEducationSuccess = createAction(
  '[Education] Init Education Success',
  props<{ educations: Education[] }>()
);

export const selectEducation = createAction(
  '[Education] Select Education',
  props<{ education: Education }>()
);

export const clearEducation = createAction(
  '[Education] Clear Education'
);
