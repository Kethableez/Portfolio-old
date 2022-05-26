import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Project from './project.reducers';

export const project = createFeatureSelector<Project.State>(Project.projectKey);

export const getProject = createSelector(project, (state) => state.project);
export const getProjects = createSelector(project, (state) => state.projects);
