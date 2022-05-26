import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PageType } from '../core/models/page-type.model';

enum Language {
  PL = 'pl',
  EN = 'en',
}

@Component({
  selector: 'ktbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostListener('window:scroll', ['$event']) onWindowScroll(e: any) {

    // Your Code Here
  }

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

  get PageType() {
    return PageType;
  }
}
