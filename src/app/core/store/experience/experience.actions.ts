import { createAction, props } from '@ngrx/store';
import { Experience } from '../../models/experience.model';

export const initExperience = createAction('[Experience] Init Experience');

export const initExperienceSuccess = createAction(
  '[Experience] Init experience success',
  props<{ experiences: Experience[] }>()
);

export const selectExperience = createAction(
  '[Experience] Select experience',
  props<{ experience: Experience }>()
);

export const clearExperience = createAction(
  '[Experience] Clear experience'
);
