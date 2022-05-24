import { Component, Input, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'app-abstract-page',
  templateUrl: './abstract-page.component.html',
  styleUrls: ['./abstract-page.component.scss']
})
export class AbstractPageComponent extends PageDirective implements OnInit {
  @Input() pageType?: PageType;

  constructor() {
    super();
  }

  ngOnInit() {
    console.log(this.pageType);
    switch (this.pageType || PageType.LANDING) {
      case PageType.LANDING:
       this.background = 'bg-dark';
       this.blobs = [
         {
           blob: 'blob-1',
           style: 'blob up right',
           size: {
            width: 648,
            height: 648,
           },
         },
         {
          blob: 'blob-2',
          style: 'blob down left',
          size: {
           width: 649,
           height: 648,
          },
        }
       ];
        break;

      case PageType.ABOUT:
      case PageType.EXPERIENCE:
        case PageType.CONTACT:
        this.background = 'bg-light';
        this.blobs = [
          {
            blob: 'blob-3',
            style: 'blob up left',
            size: {
             width: 648,
             height: 687,
            },
          },
          {
           blob: 'blob-4',
           style: 'blob down right',
           size: {
            width: 648,
            height: 648,
           },
         }
        ];
        break;

      case PageType.EDUCATION:
      case PageType.PROJECTS:
        this.background = 'bg-dark';
        this.blobs = [
          {
            blob: 'blob-5',
            style: 'blob up right',
            size: {
             width: 648,
             height: 648,
            },
          },
          {
           blob: 'blob-6',
           style: 'blob down left',
           size: {
            width: 648,
            height: 721,
           },
         }
        ];
        break;
    }
  }

}
