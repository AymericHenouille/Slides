import { NgModule } from '@angular/core';
import { EditionFeatureModule } from 'src/app/features/edition-feature/edition-feature.module';
import { LayoutModule } from 'src/app/features/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BottomPanelComponent } from './components/bottom-panel/bottom-panel.component';
import { CenterPanelComponent } from './components/center-panel/center-panel.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { EditionRoutingModule } from './edition-routing.module';
import { EditionComponent } from './edition.component';
import { EditionPageComponent } from './pages/edition-page/edition-page.component';

@NgModule({
  declarations: [
    EditionComponent,
    EditionPageComponent,
    LeftPanelComponent,
    RightPanelComponent,
    BottomPanelComponent,
    CenterPanelComponent
  ],
  imports: [
    EditionRoutingModule,
    SharedModule,
    EditionFeatureModule,
    LayoutModule
  ]
})
export class EditionModule { }
