import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bailleur',
    loadChildren: () =>
      import('./bailleur/bailleur.module').then((m) => m.BailleurModule)
  },
  {
    path: 'locataire',
    loadChildren: () =>
      import('./locataire/locataire.module').then((m) => m.LocataireModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
