import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Experience from './experience.reducers';

export const experience = createFeatureSelector<Experience.State>(Experience.experienceKey);

export const getExperience = createSelector(experience, (state) => state.experience);
export const getExperiences = createSelector(experience, (state) => state.experiences);
