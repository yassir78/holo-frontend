import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UploadFileService } from './services/uploadFileService';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { emailConfirmationInterceptor } from './Interceptorrs/emailConfirmationInterceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    HttpClientJsonpModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictActionImmutability: false,
      }
    }),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    HttpClientModule,
    LazyLoadImageModule,
  ],

  providers: [UploadFileService, {
    provide: HTTP_INTERCEPTORS,
    useClass: emailConfirmationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
