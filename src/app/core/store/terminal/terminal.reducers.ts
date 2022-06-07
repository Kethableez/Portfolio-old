import { createReducer, on } from '@ngrx/store';
import { CommandType } from '../../models/command-type.model';
import { Command } from '../../models/command.model';
import {
  clearCommand,
  runCommand,
  runCommandSuccess,
} from './terminal.actions';

export interface State {
  commands: Command[];
}

export const initialState: State = {
  commands: [],
};

export const terminalKey = 'terminal';

export const terminalReducer = createReducer(
  initialState,
  on(runCommand, (state, { command }) => ({
    ...state,
    commands: [
      ...state.commands,
      {
        commandType: CommandType.DEFAULT,
        content: `$ ${command}`,
      },
    ],
  })),
  on(runCommandSuccess, (state, { payload }) => ({
    ...state,
    commands: [
      ...state.commands,
      {
        ...payload,
      },
    ],
  })),
  on(clearCommand, (state) => ({
    ...state,
    commands: [],
  }))
);

export function reducer(state: State | undefined, action: any) {
  return terminalReducer(state, action);
}
