import { Component, OnInit } from '@angular/core';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent extends PageDirective implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
