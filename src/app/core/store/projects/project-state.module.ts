import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProjectEffects } from './project.effects';
import { projectKey, projectReducer } from './project.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(projectKey, projectReducer),
    EffectsModule.forFeature([ProjectEffects]),
  ],
  declarations: [],
})
export class ProjectStateModule {}
