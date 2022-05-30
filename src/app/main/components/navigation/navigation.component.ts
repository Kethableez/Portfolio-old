import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';
import { SettingService } from 'src/app/core/services/setting.service';
import { Language } from '../../app.component';

@Component({
  selector: 'ktbz-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() currentPage!: PageType;
  @Output() changedLang = new EventEmitter<Language>();

  constructor(private settings: SettingService) {}

  ngOnInit(): void {}

  get PageType() {
    return PageType;
  }

  isSectionVisible(page: PageType) {
    return page === this.currentPage;
  }

  isFilled(page: PageType) {
    return this.isSectionVisible(page) ? 'fill' : '';
  }

  changeLang() {
    const lang =
      this.settings.currentLang === Language.PL ? Language.EN : Language.PL;
    this.changedLang.emit(lang);
  }
}
