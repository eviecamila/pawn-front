import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeEnabled = new BehaviorSubject<boolean>(false);
  private static instance: DarkModeService;

  private constructor() {
    // Evita que se pueda crear una instancia directamente.
  }

  static getInstance() {
    if (!DarkModeService.instance) {
      DarkModeService.instance = new DarkModeService();
    }
    return DarkModeService.instance;
  }

  toggleDarkMode() {
    const newValue = !this.darkModeEnabled.value;
    this.darkModeEnabled.next(newValue);
    // Implementa lógica para aplicar estilos de modo oscuro a la interfaz de usuario basándose en 'newValue'.
  }

  isDarkModeEnabled() {
    return this.darkModeEnabled.asObservable();
  }
}
