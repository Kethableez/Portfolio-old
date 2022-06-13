import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { CommandType } from 'src/app/core/models/command-type.model';
import { RootState } from 'src/app/core/store/root.state';
import { getCommands } from 'src/app/core/store/terminal';

@Component({
  selector: 'ktbz-terminal-content',
  templateUrl: './terminal-content.component.html',
  styleUrls: ['./terminal-content.component.scss']
})
export class TerminalContentComponent {

  @Output() newEntry = new EventEmitter<void>();

  commands$ = this.store$.select(getCommands).pipe(
    tap(() => this.newEntry.emit())
  );

  constructor(
    private store$: Store<RootState>
  ) { }

  get CommandType() {
    return CommandType;
  }

}
