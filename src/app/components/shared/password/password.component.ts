import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  @Input() label = 'Password';
  @Input() placeholder = '';
  @Input() password: string = '';

  @Output() passwordChange = new EventEmitter<string>();

  visible = false;

  togglePasswordVisibility() {
    this.visible = !this.visible;
  }

  onChangePassword() {
    this.passwordChange.emit(this.password);
  }
}
