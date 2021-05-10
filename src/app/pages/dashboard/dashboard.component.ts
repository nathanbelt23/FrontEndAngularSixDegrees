import { Component, OnInit } from '@angular/core';


import { MenuItem, PrimeNGConfig } from 'primeng/api';
import {trigger,state,style,transition,animate} from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
      :host ::ng-deep button {
          margin-right: .25em;
      }
  `],
     animations: [
      trigger('errorState', [
          state('hidden', style({
              opacity: 0
          })),
          state('visible', style({
              opacity: 1
          })),
          transition('visible => hidden', animate('400ms ease-in')),
          transition('hidden => visible', animate('400ms ease-out'))
      ])
  ],
})
export class DashboardComponent  {
    constructor(
        private primengConfig: PrimeNGConfig
        ) { }
  fecha=new Date();


}
