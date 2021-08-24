import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleRegisterComponent } from './pages/role-register/role-register.component';

const routes: Routes = [
  {
    path: 'role',
    component: RoleRegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
