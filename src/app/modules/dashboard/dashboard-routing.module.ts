import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BailleurComponent } from './bailleur/bailleur.component';
import { LocataireComponent } from './locataire/locataire.component';

const routes: Routes = [
  {
    path: 'locataire',
    loadChildren: () =>
      import('./locataire/locataire.module').then((m) => m.LocataireModule)
  },
  {
    path: 'bailleur',
    component: BailleurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
