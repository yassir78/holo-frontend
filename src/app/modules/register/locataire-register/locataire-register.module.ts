import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocataireRegisterRoutingModule } from './locataire-register-routing.module';
import { LocataireRegisterComponent } from './pages/locataire-register/locataire-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LocataireRegisterComponent
  ],
  imports: [
    CommonModule,
    LocataireRegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LocataireRegisterModule { }
