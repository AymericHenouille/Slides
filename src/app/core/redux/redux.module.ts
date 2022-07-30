import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { stageReducer } from 'src/app/features/edition-feature/redux/reducers/stage.reducer';
import { environment } from 'src/environments/environment';

const MODULES: (ModuleWithProviders<unknown> | Type<unknown>)[] = [
  StoreModule.forRoot({
    layers: stageReducer
  }, {
    runtimeChecks: {
      // strictStateImmutability and strictActionImmutability are enabled by default
      strictStateSerializability: true,
      strictActionSerializability: true,
      strictActionWithinNgZone: true,
      strictActionTypeUniqueness: true,
      // if you want to change complexe objects and that we have. We need to disable these settings
      // change strictStateImmutability, strictActionImmutability
      strictStateImmutability: false, // set this to false
      strictActionImmutability: true,
  },
  }),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
  }),
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class ReduxModule { }
