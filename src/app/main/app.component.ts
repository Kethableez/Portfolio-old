import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

enum Language {
  PL = 'pl',
  EN = 'en'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(Language.PL);
    translate.use(Language.PL);
  }

  title = 'app.title';

  changeLanguage(language: Language) {
    this.translate.use(language);
  }

  get Language() {
    return Language;
  }
}
