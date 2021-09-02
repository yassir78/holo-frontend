import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
