import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EducationStateModule } from './core/store/education';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ExperienceStateModule } from './core/store/experience';
import { ProjectStateModule } from './core/store/projects';
import { AppStateModule } from './core/store/app/app-state.module';
import { InitService } from './core/services/init.service';
import { TerminalComponent } from './main/terminal/terminal.component';
import { TerminalContentComponent } from './main/terminal/terminal-content/terminal-content.component';
import { TerminalInputComponent } from './main/terminal/terminal-input/terminal-input.component';
import { TerminalStateModule } from './core/store/terminal';
import { DisplayComponent } from './main/display/display.component';
import { DisplayStateModule } from './core/store/display';
import { ProgressBarComponent } from './main/components/progress-bar/progress-bar.component';
import { LandingComponent } from './main/pages/landing/landing.component';
import { AboutComponent } from './main/pages/about/about.component';
import { SkillsComponent } from './main/pages/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    TerminalContentComponent,
    TerminalInputComponent,
    DisplayComponent,
    ProgressBarComponent,
    LandingComponent,
    AboutComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EducationStateModule,
    ExperienceStateModule,
    ProjectStateModule,
    AppStateModule,
    TerminalStateModule,
    DisplayStateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [TranslateModule],
  providers: [
    InitService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

export function appInit(initService: InitService) {
  return () => initService.load();
}
