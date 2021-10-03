import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GoodcardComponent } from './goodcard/goodcard.component';
import { ResponsivenavComponent } from './responsivenav/responsivenav.component';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { GetValuesPipePipe } from './pipes/get-values-pipe.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { ModalComponent } from './modal/modal.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    GoodcardComponent,
    ResponsivenavComponent,
    ProgressBarComponent,
    GetValuesPipePipe,
    SplitPipe,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    GoodcardComponent,
    ResponsivenavComponent,
    ProgressBarComponent,
    GetValuesPipePipe,
    SplitPipe,
    ModalComponent
  ]
})
export class SharedModule { }
