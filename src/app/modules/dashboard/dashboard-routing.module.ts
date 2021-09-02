import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocataireComponent } from './locataire/locataire.component';
import { RemetteurComponent } from './remetteur/remetteur.component';

const routes: Routes = [
  {
    path: 'locataire',
    component: LocataireComponent
  },
  {
    path: 'remetteur',
    component: RemetteurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
