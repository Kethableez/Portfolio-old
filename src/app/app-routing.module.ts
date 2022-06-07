import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/pages/about/about.component';
import { ContactComponent } from './main/pages/contact/contact.component';
import { EducationComponent } from './main/pages/education/education.component';
import { ExperienceComponent } from './main/pages/experience/experience.component';
import { InterestComponent } from './main/pages/interest/interest.component';
import { LandingComponent } from './main/pages/landing/landing.component';
import { ProjectsComponent } from './main/pages/projects/projects.component';
import { SkillsComponent } from './main/pages/skills/skills.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'interests',
    component: InterestComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
