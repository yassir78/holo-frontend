import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GoodcardComponent } from './goodcard/goodcard.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    GoodcardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    GoodcardComponent
  ]
})
export class SharedModule { }
