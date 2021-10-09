import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleRegisterComponent } from './pages/role-register/role-register.component';
import { RegisterSuccessComponent } from './pages/register-success/register-success.component';
import { EmailConfirmedComponent } from './pages/email-confirmed/email-confirmed.component';
import { EmailAlreadyConfirmedComponent } from './pages/email-already-confirmed/email-already-confirmed.component';
import { EmailTokenExpiredComponent } from './pages/email-token-expired/email-token-expired.component';
import { EmailNonAuthorizedComponent } from './pages/email-non-authorized/email-non-authorized.component';


@NgModule({
  declarations: [RoleRegisterComponent, RegisterSuccessComponent, EmailConfirmedComponent, EmailAlreadyConfirmedComponent, EmailTokenExpiredComponent, EmailNonAuthorizedComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ]
})
export class RegisterModule { }
