import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GoodcardComponent } from './goodcard/goodcard.component';
import { ResponsivenavComponent } from './responsivenav/responsivenav.component';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    GoodcardComponent,
    ResponsivenavComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    GoodcardComponent,
    ResponsivenavComponent,
    ProgressBarComponent
  ]
})
export class SharedModule { }
