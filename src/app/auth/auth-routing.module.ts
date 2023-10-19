import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
