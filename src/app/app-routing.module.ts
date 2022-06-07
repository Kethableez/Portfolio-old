import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/pages/about/about.component';
import { LandingComponent } from './main/pages/landing/landing.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
