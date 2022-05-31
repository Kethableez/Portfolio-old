import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeSlide = trigger('fadeSlide', [
  state('slideIn', style({
    transform: 'translateY(0)',
    opacity: '1'
  })),
  state('slideOut', style({
    transform: 'translateY(-10rem)',
    opacity: '0'
  })),
  transition('slideIn => slideOut', [
    animate('0.2s')
  ]),
  transition('slideOut => slideIn', [
    animate('0.2s')
  ]),
]);
