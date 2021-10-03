import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { loginReducer } from './state/login.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './state/login.effect';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(
      "login", loginReducer
    ),
    EffectsModule.forFeature([LoginEffects]),
    FormsModule,
    SharedModule,

  ],
  providers: [AuthService]

})
export class LoginModule { }
