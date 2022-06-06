import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'ktbz-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  currVal = 0;

  ngOnInit(): void {
    timer(0, 30).subscribe(() => {
      if (this.currVal < 100) {
        this.currVal++;
      }
    });
  }

}
