import { ModuleWithProviders, NgModule, Type } from '@angular/core';

const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [

];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
  providers: []
})
export class FireModule { }
