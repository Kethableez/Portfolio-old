import { createReducer, on } from '@ngrx/store';
import { Project } from '../../models/project.model';
import { clearProject, initProjectSuccess, selectProject } from './project.actions';

export interface State {
  projects: Project[];
  project: Project | null;
}

export const initialState: State = {
  projects: [],
  project: null
};

export const projectKey = 'Project';

export const projectReducer = createReducer(
  initialState,
  on(initProjectSuccess, (state, { projects }) => ({...state, projects})),
  on(selectProject, (state, { project }) => ({ ...state, project })),
  on(clearProject, (state) => ({ ...state, Project: null }))
)

export function reducer(state: State | undefined, action: any) {
  return projectReducer(state, action);
}
