import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocataireRegisterRoutingModule } from './locataire-register-routing.module';
import { LocataireRegisterComponent } from './pages/locataire-register/locataire-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { remetteurReducer } from './state/remetteur.reducer';
import { RemetteurEffect } from './state/remetteur.effect';


@NgModule({
  declarations: [
    LocataireRegisterComponent
  ],
  imports: [
    CommonModule,
    LocataireRegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      "remetteur", remetteurReducer
    ),
    EffectsModule.forFeature([RemetteurEffect]),
  ]
})
export class LocataireRegisterModule { }
