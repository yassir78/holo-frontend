import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailAlreadyConfirmedComponent } from './pages/email-already-confirmed/email-already-confirmed.component';
import { EmailConfirmedComponent } from './pages/email-confirmed/email-confirmed.component';
import { EmailNonAuthorizedComponent } from './pages/email-non-authorized/email-non-authorized.component';
import { EmailTokenExpiredComponent } from './pages/email-token-expired/email-token-expired.component';
import { RegisterSuccessComponent } from './pages/register-success/register-success.component';
import { RoleRegisterComponent } from './pages/role-register/role-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'role', pathMatch: 'full' },
  {
    path: 'role',
    component: RoleRegisterComponent
  },
  {
    path: 'success',
    component: RegisterSuccessComponent
  },
  {
    path: 'email-confirmed',
    component: EmailConfirmedComponent
  },
  {
    path: 'email-non-authorized',
    component: EmailNonAuthorizedComponent
  },
  {
    path: 'email-token-expired',
    component: EmailTokenExpiredComponent
  },
  {
    path: 'email-already-confirmed',
    component: EmailAlreadyConfirmedComponent
  },
  {
    path: 'bailleur',
    loadChildren: () =>
      import('./bailleur-register/bailleur-register.module').then((m) => m.BailleurRegisterModule)
  },
  {
    path: 'locataire',
    loadChildren: () =>
      import('./locataire-register/locataire-register.module').then((m) => m.LocataireRegisterModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
