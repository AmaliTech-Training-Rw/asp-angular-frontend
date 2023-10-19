import { Component, HostBinding, effect, signal } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostBinding('class.dark') get mode() {
    return this.themeService.darkMode();
  }

  constructor(private themeService: ThemeService) {
    effect(() => {
      window.localStorage.setItem(
        'darkMode',
        JSON.stringify(this.themeService.darkMode())
      );
    });
  }
}
