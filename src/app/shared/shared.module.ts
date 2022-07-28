import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { MaterialModule } from './material/material.module';

const MODULES: Type<unknown>[] = [
  CommonModule,
  MaterialModule,
  AngularSplitModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})

export class SharedModule { }
