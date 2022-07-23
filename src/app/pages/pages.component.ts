import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
  <app-desktop-layout>
    <router-outlet></router-outlet>
  </app-desktop-layout>`
})
export class PagesComponent { }
