import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const ROUTES: Routes = [
  { path: '', component: PagesComponent, children: [
    { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
    { path: 'creation', loadChildren: () => import('./creation/creation.module').then(m => m.CreationModule) },
    { path: '', redirectTo: 'creation', pathMatch: 'full'}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
