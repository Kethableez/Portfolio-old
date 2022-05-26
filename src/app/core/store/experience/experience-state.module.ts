import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ExperienceEffects } from './experience.effects';
import { experienceKey, experienceReducer } from './experience.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(experienceKey, experienceReducer),
    EffectsModule.forFeature([ExperienceEffects]),
  ],
  declarations: [],
})
export class ExperienceStateModule {}
