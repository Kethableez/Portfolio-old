import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EducationEffects } from './education.effects';
import { educationKey, educationReducer } from './education.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(educationKey, educationReducer),
    EffectsModule.forFeature([EducationEffects]),
  ],
  declarations: [],
})
export class EducationStateModule {}
