import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocataireComponent } from './locataire.component';
import { MygoodsComponent } from './mygoods/mygoods.component';

const routes: Routes = [
  {
    path: '',
    component: LocataireComponent,
    children: [
      {
        path: 'mygoods',
        component: MygoodsComponent
      },
      { path: '', redirectTo: 'mygoods' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocataireRoutingModule { }
