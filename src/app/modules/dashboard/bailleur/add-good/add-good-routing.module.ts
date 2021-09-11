import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGoodHomeComponent } from './add-good-home/add-good-home.component';
import { DescriptionComponent } from './description/description.component';
import { DetailsComponent } from './details/details.component';
import { DisponibilityComponent } from './disponibility/disponibility.component';
import { InformationComponent } from './information/information.component';
import { MediaComponent } from './media/media.component';
import { PostComponent } from './post/post.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  {
    path: '',
    component: AddGoodHomeComponent,
    children: [
      {
        path: 'information',
        component: InformationComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'price',
        component: PriceComponent
      },
      {
        path: 'description',
        component: DescriptionComponent
      },
      {
        path: 'media',
        component: MediaComponent
      },
      {
        path: 'disponibilty',
        component: DisponibilityComponent
      },
      {
        path: 'post',
        component: PostComponent
      },
      { path: '', redirectTo: 'information' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddGoodRoutingModule { }
