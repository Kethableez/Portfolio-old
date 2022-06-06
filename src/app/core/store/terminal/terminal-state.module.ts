import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { terminalKey, terminalReducer } from './terminal.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(terminalKey, terminalReducer),
    EffectsModule.forFeature([]),
  ],
  declarations: [],
})
export class TerminalStateModule {}
