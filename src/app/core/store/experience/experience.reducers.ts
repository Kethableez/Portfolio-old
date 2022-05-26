import { createReducer, on } from '@ngrx/store';
import { Experience } from '../../models/experience.model';
import { clearExperience, initExperienceSuccess, selectExperience } from './experience.actions';

export interface State {
  experiences: Experience[];
  experience: Experience | null;
}

export const initialState: State = {
  experiences: [],
  experience: null
};

export const experienceKey = 'experience';

export const experienceReducer = createReducer(
  initialState,
  on(initExperienceSuccess, (state, { experiences }) => ({...state, experiences})),
  on(selectExperience, (state, { experience }) => ({ ...state, experience })),
  on(clearExperience, (state) => ({ ...state, experience: null }))
)

export function reducer(state: State | undefined, action: any) {
  return experienceReducer(state, action);
}
