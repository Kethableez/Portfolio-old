import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Education from './education.reducers';

export const education = createFeatureSelector<Education.State>(Education.educationKey);

export const getEducation = createSelector(education, (state) => state.education);
export const getEducations = createSelector(education, (state) => state.educations);
