import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { BailleurComponent } from './bailleur.component';
import { MygoodsComponent } from './mygoods/mygoods.component';

const routes: Routes = [
  {
    path: '',
    component: BailleurComponent,
    children: [
      {
        path: 'mygoods',
        component: MygoodsComponent
      },
      {
        path: 'applications',
        component: ApplicationsComponent
      },
      { path: '', redirectTo: 'mygoods' }
    ]
  },
  {
    path: 'add-good',
    loadChildren: () =>
      import('./add-good/add-good.module').then((m) => m.AddGoodModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BailleurRoutingModule { }
