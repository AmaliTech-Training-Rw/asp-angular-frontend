import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  darkMode = signal<boolean>(
    JSON.parse(
      `${
        window.localStorage.getItem('darkMode') === 'true' ||
        (!('darkMode' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      }`
    )
  );

  constructor() {}
}
