import { createAction, props } from '@ngrx/store';
import { Project } from '../../models/project.model';

export const initProject = createAction('[Project] Init Project');

export const initProjectSuccess = createAction(
  '[Project] Init Project Success',
  props<{ projects: Project[] }>()
);

export const selectProject = createAction(
  '[Project] Select Project',
  props<{ project: Project }>()
);

export const clearProject = createAction(
  '[Project] Clear Project'
);
