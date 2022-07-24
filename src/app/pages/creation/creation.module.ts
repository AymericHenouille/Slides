import { NgModule } from '@angular/core';
import { CreationRoutingModule } from './creation-routing.module';
import { CreationComponent } from './creation.component';
import { SlideComponent } from './pages/slide/slide.component';

@NgModule({
  declarations: [CreationComponent, SlideComponent],
  imports: [CreationRoutingModule]
})
export class CreationModule { }
