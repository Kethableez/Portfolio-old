import { Component, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';

@Component({
  selector: 'ktbz-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  get PageType() {
    return PageType;
  }
}
