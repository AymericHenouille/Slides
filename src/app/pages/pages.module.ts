import { NgModule } from '@angular/core';
import { LayoutModule } from '../features/layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    PagesRoutingModule,
    LayoutModule
  ],
  exports: [PagesRoutingModule]
})
export class PagesModule { }
