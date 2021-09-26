import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocataireComponent } from './locataire.component';
import { GoodsResolver } from './state/goods.resolver';

const routes: Routes = [
  {
    path: 'goods',
    component: LocataireComponent,
    resolve: {
      goods: GoodsResolver
    },

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
