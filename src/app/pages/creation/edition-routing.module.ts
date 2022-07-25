import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditionComponent } from './edition.component';
import { EditionPageComponent } from './pages/edition-page/edition-page.component';

const ROUTES: Routes = [
  { path: '', component: EditionComponent, children: [
    { path: ':id', component: EditionPageComponent },
    { path: '', redirectTo: '1', pathMatch: 'full' },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class EditionRoutingModule { }
