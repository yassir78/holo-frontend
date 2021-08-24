import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocataireRegisterComponent } from './pages/locataire-register/locataire-register.component';

const routes: Routes = [
  {
    path:'', component:LocataireRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocataireRegisterRoutingModule { }
