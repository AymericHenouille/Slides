import { NgModule, Type } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PanelComponent } from './components/panel/panel.component';

const COMPONENTS: Type<unknown>[] = [
  PanelComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [SharedModule],
  exports: [COMPONENTS]
})
export class EditionFeatureModule { }
