import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeEnabled = new BehaviorSubject<boolean>(false);

  toggleDarkMode() {
    const newValue = !this.darkModeEnabled.value;
    this.darkModeEnabled.next(newValue);
    // Implement logic to apply dark mode styles to the component's UI based on newValue.
  }

  isDarkModeEnabled() {
    return this.darkModeEnabled.asObservable();
  }
}
