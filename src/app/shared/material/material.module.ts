import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule, Type } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

const MODULES: Type<unknown>[] = [
  DragDropModule,
  MatTabsModule,
  MatIconModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialModule { }
