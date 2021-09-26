import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BailleurComponent } from './bailleur/bailleur.component';
import { LocataireComponent } from './locataire/locataire.component';

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
