import { createReducer, on } from '@ngrx/store';
import { Education } from '../../models/education.model';
import { clearEducation, initEducationSuccess, selectEducation } from './education.actions';

export interface State {
  educations: Education[];
  education: Education | null;
}

export const initialState: State = {
  educations: [],
  education: null
};

export const educationKey = 'education';

export const educationReducer = createReducer(
  initialState,
  on(initEducationSuccess, (state, { educations }) => ({...state, educations})),
  on(selectEducation, (state, { education }) => ({ ...state, education })),
  on(clearEducation, (state) => ({ ...state, education: null }))
)

export function reducer(state: State | undefined, action: any) {
  return educationReducer(state, action);
}
