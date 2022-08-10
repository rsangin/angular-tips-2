import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public items: MenuItem[] = [
    { title: 'Object Assign', url: 'object-assign' },
    { title: 'Extended Method', url: 'extended-method' },
    { title: 'Dynamic Component Loader', url: 'dynamic-component-loader' },
    // { title: 'Promise vs Observables', url: 'promise-observable' },
    { title: 'Detect Change Strategy', url: 'detect-change-strategy' },
    { title: 'Pipe vs Method Performance', url: 'pipe-method-performance' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
