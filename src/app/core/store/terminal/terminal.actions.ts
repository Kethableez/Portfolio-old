import { createAction, props } from '@ngrx/store';
import { Command } from '../../models/command.model';

export const runCommand = createAction(
  '[Terminal] Run Command',
  props<{ command: string }>()
);

export const changeInputType = createAction(
  '[Terminal] Change Input Type',
  props<{ inputType: 'command' | 'message' }>()
);

export const runCommandSuccess = createAction(
  '[Terminal] Run Command Success',
  props<{ payload: Command }>()
);

export const helpCommand = createAction(
  '[Terminal] Run Help Command',
  props<{ command?: string }>()
);

export const cdCommand = createAction(
  '[Terminal] Run Cd Command',
  props<{ directory: string }>()
);

export const msgCommand = createAction(
  '[Terminal] Run Msg Command',
);

export const displayCommand = createAction(
  '[Terminal] Run Display Command',
  props<{ objectType: string, id: string }>()
);

export const langCommand = createAction(
  '[Terminal] Run Lang Command',
  props<{ lang?: string }>()
)

export const wgetCommand = createAction(
  '[Terminal] Run Wget Command',
  props<{filename: string, lang?: string}>()
);

export const lsCommand = createAction('[Terminal] Run Ls Command');

export const notFoundCommand = createAction(
  '[Terminal] Run Not Found Command',
  props<{ command: string }>()
);

export const clearCommand = createAction('[Terminal] Run Clear Command');
