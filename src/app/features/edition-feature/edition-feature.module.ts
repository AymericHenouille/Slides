import { NgModule, Type } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { EditionPanelComponent } from './components/panel/edition-panel/edition-panel.component';
import { PanelComponent } from './components/panel/panel.component';

const COMPONENTS: Type<unknown>[] = [
  PanelComponent,
  HeaderComponent,
  EditionPanelComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    SharedModule,
    // StoreModule.forFeature('edition', {
    //   layers: stageReducer
    // }),
    // EffectsModule.forFeature([])
  ],
  exports: [COMPONENTS]
})
export class EditionFeatureModule { }
