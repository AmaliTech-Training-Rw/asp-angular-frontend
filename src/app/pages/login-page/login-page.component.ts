import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorage } from 'src/app/utils/storage/local-storage';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.errorMessage = null;
    this.isLoading = true;
    this.authService
      .login({
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (data) => {
          LocalStorage.setUserAuthData(data);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || err.message;
          this.isLoading = false;
        },
        complete: () => {
          console.log('complete');
          this.isLoading = false;
        },
      });
  }

  onPasswordChange(newPassword: string) {
    this.password = newPassword;
  }
}
