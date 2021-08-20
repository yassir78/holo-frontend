import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './pages/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingEffect } from './state/landing.effects';
import { landingReducer } from './state/landing.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SweetAlert2Module,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      "landing", landingReducer
    ),
    EffectsModule.forFeature([LandingEffect]),
    FormsModule
  ]
})
export class LandingModule { }
