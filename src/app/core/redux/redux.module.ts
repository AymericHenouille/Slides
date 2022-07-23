import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

const MODULES: (ModuleWithProviders<unknown> | Type<unknown>)[] = [
  StoreModule.forRoot({}, {}),
  EffectsModule.forRoot([])
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class ReduxModule { }
