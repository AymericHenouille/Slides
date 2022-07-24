import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation.component';
import { SlideComponent } from './pages/slide/slide.component';

const ROUTES: Routes = [
  { path: '', component: CreationComponent, children: [
    { path: ':id', component: SlideComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CreationRoutingModule { }
