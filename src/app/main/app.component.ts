import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { PageType } from '../core/models/page-type.model';

export enum Language {
  PL = 'pl',
  EN = 'en',
}

@Component({
  selector: 'ktbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChildren('section') sections: QueryList<any> = new QueryList();

  sectionChanged = new BehaviorSubject<PageType>(PageType.LANDING);

  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    this.sections.forEach((section) => {
      if (this.isSectionVisible(section.ref)) {
        console.log('next', section.pageType);
        this.sectionChanged.next(section.pageType);
      }
    });

    this.changeTitle();
  }

  constructor(private translate: TranslateService, private title: Title) {
    translate.addLangs([Language.PL, Language.EN]);
    translate.setDefaultLang(Language.PL);
    translate.use(Language.PL);
    title.setTitle(this.getTitleKey(this.sectionChanged.value));
  }

  changeTitle() {
    this.translate
      .get(this.sectionChanged.value)
      .subscribe((title) => {
        this.title.setTitle(this.getTitleKey(title));
      })
      .unsubscribe();
  }

  isSectionVisible(section: ElementRef<any>) {
    const rect = section.nativeElement.getBoundingClientRect();
    const topShown = this.floor(rect.top) >= 0;
    const bottomShown = this.floor(rect.bottom) <= window.innerHeight;
    return topShown && bottomShown;
  }

  private floor(num: number) {
    return Math.floor(num);
  }

  changeLanguage(language: Language) {
    this.translate.use(language);
  }

  getTitleKey(page: string) {
    return `title.${page}`;
  }

  get Language() {
    return Language;
  }

  get PageType() {
    return PageType;
  }
}
