import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsComponent } from './faqs/faqs.component';
import { PolitiqueComponent } from './politique/politique.component';
import { TermesComponent } from './termes/termes.component';
const routes: Routes = [
  {
    path:"faqs",
    component:FaqsComponent
  },
    {
    path:"termes",
    component:TermesComponent
  },
      {
    path:"politique",
    component:PolitiqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
