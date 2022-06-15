import { Injector, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export let AppInjector: Injector;

const routes: Routes = [
  {
    path: 'login',
    data: { title: 'Login' },
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  // {
  //   path: 'sign-up',
  //   data: { title: 'Sign Up' },
  //   loadChildren: () => import('./user/signup/signup.module').then(m => m.SignupModule)
  // },
  {
    path: 'forgot-password',
    data: { title: 'Forgot Password' },
    loadChildren: () => import('./user/forgot-password/forgot-password.module').then(m => m.ForgetPasswordModule)
  },
  {
    path: 'dashboard',
    data: { title: 'Dashboard' },
    loadChildren: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'error',
    data: { title: 'Error' },
    loadChildren: () => import('./user/error/error.module').then(m => m.ErrorModule)
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
