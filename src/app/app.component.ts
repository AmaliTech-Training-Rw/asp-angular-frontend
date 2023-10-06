import { Component, HostBinding, effect, signal } from '@angular/core';
import { ThemeServiceService } from './services/theme/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostBinding('class.dark') get mode() {
    return this.themeService.darkMode();
  }

  constructor(private themeService: ThemeServiceService) {
    effect(() => {
      window.localStorage.setItem(
        'darkMode',
        JSON.stringify(this.themeService.darkMode())
      );
    });
  }
}
