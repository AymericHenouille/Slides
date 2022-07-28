import { Component } from '@angular/core';

@Component({
  selector: 'app-creation',
  template: `
    <app-header></app-header>
    <div class="page-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent { }
