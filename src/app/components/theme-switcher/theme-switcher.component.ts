import { Component, effect, signal } from '@angular/core';
import { ThemeServiceService } from 'src/app/services/theme/theme-service.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],
})
export class ThemeSwitcherComponent {
  darkMode = this.themeService.darkMode;

  constructor(private themeService: ThemeServiceService) {}
}
