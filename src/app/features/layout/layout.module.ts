import { NgModule, Type } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ResizableDirective } from './directives/resizable.directive';

const COMPONENTS: Type<unknown>[] = [
  DesktopLayoutComponent,
  ResizableDirective
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
