import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation.component';

const ROUTES: Routes = [

];

@NgModule({
  declarations: [CreationComponent],
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  bootstrap: [CreationComponent]
})
export class CreationRoutingModule { }
