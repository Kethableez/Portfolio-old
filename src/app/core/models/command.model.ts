import { CommandType } from './command-type.model';

export interface Command {
  commandType: CommandType,
  content: any;
}
