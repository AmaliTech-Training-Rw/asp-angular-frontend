import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftSideComponent } from './components/auth/left-side/left-side.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { PasswordComponent } from './components/shared/password/password.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ThemeSwitcherComponent,
    FooterComponent,
    LeftSideComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    PasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [],
})
export class AuthModule { } 
