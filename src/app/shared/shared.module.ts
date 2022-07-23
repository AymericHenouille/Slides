import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MaterialModule } from './material/material.module';

const MODULES: Type<unknown>[] = [
  CommonModule,
  MaterialModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})

export class SharedModule { }
