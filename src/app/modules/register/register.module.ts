import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleRegisterComponent } from './pages/role-register/role-register.component';


@NgModule({
  declarations: [RoleRegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ]
})
export class RegisterModule { }
