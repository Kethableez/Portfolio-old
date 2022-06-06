import { createReducer, on } from '@ngrx/store';
import { CommandType } from '../../models/command-type.model';
import { Command } from '../../models/command.model';
import { clearTerminal, runCommand, runHelp, runLs, runNotFoundCommand } from './terminal.actions';

export interface State {
  commands: Command[]
}

export const initialState: State = {
  commands: [],
}

export const terminalKey = 'terminal';

export const terminalReducer = createReducer(
  initialState,
  on(runCommand, (state, { command }) => ({
    ...state,
    commands: [...state.commands, { commandType: CommandType.DEFAULT_COMMAND, content: command }]
  })),
  on(runNotFoundCommand, (state, { command }) => ({
    ...state,
    commands: [...state.commands, { commandType: CommandType.NOT_FOUND, content: command }]
  })),
  on(runHelp, (state, { commands }) => ({
    ...state,
    commands: [...state.commands, {
      commandType: CommandType.HELP,
      content: commands
    }]
  })),
  on(runLs, (state, { commands }) => ({
    ...state,
    commands: [...state.commands, {
      commandType: CommandType.LS,
      content: commands
    }]
  })),
  on(clearTerminal, (state) =>({
    ...state,
    commands: []
  }))
);

export function reducer(state: State | undefined, action: any) {
  return terminalReducer(state, action);
}
