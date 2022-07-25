import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FireModule } from './fire/fire.module';
import { ReduxModule } from './redux/redux.module';

const MODULES: Type<unknown>[] = [
  BrowserModule,
  BrowserAnimationsModule,
  ReduxModule,
  FireModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class CoreModule { }
