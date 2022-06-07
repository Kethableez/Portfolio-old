import { createAction, props } from '@ngrx/store';
import { CommandType } from '../../models/command-type.model';
import { Command } from '../../models/command.model';
import { Language } from '../../models/language.model';
import { LsCommand } from '../../models/ls-command.model';

export const runCommand = createAction(
  '[Terminal] Run Command',
  props<{ command: string }>()
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

export const displayCommand = createAction(
  '[Terminal] Run Display Command',
  props<{ objectType: string, object: string }>()
);

export const langCommand = createAction(
  '[Terminal] Run Lang Command',
  props<{ lang?: string }>()
)

export const lsCommand = createAction('[Terminal] Run Ls Command');

export const notFoundCommand = createAction(
  '[Terminal] Run Not Found Command',
  props<{ command: string }>()
);

export const clearCommand = createAction('[Terminal] Run Clear Command');
