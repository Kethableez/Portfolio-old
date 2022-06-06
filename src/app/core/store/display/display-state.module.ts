import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { displayKey, displayReducer } from './display.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(displayKey, displayReducer),
    EffectsModule.forFeature([]),
  ],
  declarations: [],
})
export class DisplayStateModule {}
