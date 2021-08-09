import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { FaqsComponent } from './faqs/faqs.component';
import { PolitiqueComponent } from './politique/politique.component';
import { TermesComponent } from './termes/termes.component';


@NgModule({
  declarations: [
    FaqsComponent,
       PolitiqueComponent,
       TermesComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ]
})
export class DocumentsModule { }
