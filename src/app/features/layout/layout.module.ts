import { NgModule, Type } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const COMPONENTS: Type<unknown>[] = [
  DesktopLayoutComponent,
];

@NgModule({
  imports: [SharedModule],
  declarations: [
    COMPONENTS,
    NavBarComponent
  ],
  exports: [COMPONENTS]
})
export class LayoutModule { }
