import { createAction, props } from '@ngrx/store';
import { HelpCommand } from '../../models/help-command.model';
import { LsCommand } from '../../models/ls-command.model';

export const runCommand = createAction(
  '[Terminal] Run Command',
  props<{ command: string }>()
);

export const runNotFoundCommand = createAction(
  '[Terminal] Run Not Found Command',
  props<{ command: string }>()
);

export const runHelp = createAction(
  '[Terminal] Run Help',
  props<{ commands: HelpCommand[] }>()
);

export const runLs = createAction(
  '[Terminal] Run Ls',
  props<{ commands: LsCommand }>()
);

export const clearTerminal = createAction(
  '[Terminal] Clear Terminal'
);
