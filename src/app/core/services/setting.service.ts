import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/main/app.component';
import { PageType } from '../models/page-type.model';
import { RootState } from '../store/root.state';

const MOBILE_WIDTH = 768;

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  constructor(
    private store$: Store<RootState>,
    private title: Title,
    private translate: TranslateService
  ) {}

  initApp() {}

  isMobile() {
    return window.innerWidth <= MOBILE_WIDTH;
  }

  get currentLang() {
    return this.translate.currentLang;
  }

  private parseTitle(page: PageType) {
    return `title.${page}`;
  }
}
