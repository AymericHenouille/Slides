import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule, Type } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

const MODULES: Type<unknown>[] = [
  DragDropModule,
  MatTabsModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialModule { }
