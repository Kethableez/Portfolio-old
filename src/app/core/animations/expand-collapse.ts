import { trigger, state, style, transition, animate } from '@angular/animations';

export const openDetailsAnimation = trigger('openDetails', [
  state('expanded', style({
    height: '100%',
    opacity: '1'
  })),
  state('collapsed', style({
    height: '0%',
    opacity: '0'
  })),
  transition('expanded => collapsed', [
    animate('0.2s')
  ]),
  transition('collapsed => expanded', [
    animate('0.2s')
  ]),
]);
