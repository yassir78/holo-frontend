import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
 
  {
    path:'document',
    loadChildren:()=>
    import('./modules/documents/documents.module').then((m)=>m.DocumentsModule)
  },
  {
    path:'login',
    loadChildren:()=>
    import('./modules/login/login.module').then((m)=>m.LoginModule)
  },
  {
    path:'register',
    loadChildren:()=>
    import('./modules/register/register.module').then((m)=>m.RegisterModule)
  },
    {
    path:'home',
    loadChildren:()=>
    import('./modules/home/home.module').then((m)=>m.HomeModule)
  },
     {
    path:'landing',
    loadChildren:()=>
    import('./modules/landing/landing.module').then((m)=>m.LandingModule)
  },
 {path:'**',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
