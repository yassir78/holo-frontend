import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodDetailComponent } from './good-detail/good-detail.component';
import { LocataireHomeComponent } from './locataire-home/locataire-home.component';
import { LocataireComponent } from './locataire.component';
import { GoodsResolver } from './state/goods.resolver';

const routes: Routes = [
  {
    path: 'goods',
    component: LocataireComponent,
    children: [
      {
        path: 'home',
        component: LocataireHomeComponent,
       /*  resolve: {
          goods: GoodsResolver
        } */
      },
      {
        path: 'good-details',
        component: GoodDetailComponent
      },
      { path: '', redirectTo: 'home' }

    ]
  },
  {
    path: '**',
    redirectTo: 'goods'
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocataireRoutingModule { }
