import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TerminalEffects } from './terminal.effects';
import { terminalKey, terminalReducer } from './terminal.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(terminalKey, terminalReducer),
    EffectsModule.forFeature([TerminalEffects]),
  ],
  declarations: [],
})
export class TerminalStateModule {}
