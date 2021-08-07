import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path:'login',
    loadChildren:()=>
    import('./modules/login/login-routing.module').then((m)=>m.LoginRoutingModule)
  },
  {
    path:'register',
    loadChildren:()=>
    import('./modules/register/register-routing.module').then((m)=>m.RegisterRoutingModule)
  },
    {
    path:'home',
    loadChildren:()=>
    import('./modules/home/home-routing.module').then((m)=>m.HomeRoutingModule)
  },
     {
    path:'landing',
    loadChildren:()=>
    import('./modules/landing/landing-routing.module').then((m)=>m.LandingRoutingModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
