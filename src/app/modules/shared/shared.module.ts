import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
