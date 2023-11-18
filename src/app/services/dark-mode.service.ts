import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  isDark:boolean = true;
  private darkModeEnabled = new BehaviorSubject<boolean>(true);
  private static instance: DarkModeService;

  private constructor() {
    // Evita que se pueda crear una instancia directamente.
    this.getDMFromLS()
  }
  static getInstance() {
    if (!DarkModeService.instance) {
      DarkModeService.instance = new DarkModeService();
    }
    return DarkModeService.instance;
  }
  resolve() {
    return this.isDarkModeEnabled().pipe(map((isDarkMode:any) => !isDarkMode ? 'light' : 'dark'));
  }
  getDMFromLS()
  {
    try{
      console.log(localStorage.getItem('theme'))
    switch (localStorage.getItem('theme')){
      case 'D':
      this.isDark=false;
      break;
      case 'L':
      this.isDark=true;
      break;
      default:
      this.isDark=true;
    }
    this.darkModeEnabled = new BehaviorSubject<boolean>(this.isDark);
  }
    catch(e){localStorage.setItem('theme','L');}
  }

  toggleDarkMode() {
    const newValue = !this.darkModeEnabled.value;
    this.darkModeEnabled.next(newValue);
    if (this.isDark){
      this.isDark=false;
      localStorage.setItem('theme','L');
    }
    else{
      this.isDark=true;
      localStorage.setItem('theme','D');
    }
    // Implementa lógica para aplicar estilos de modo oscuro a la interfaz de usuario basándose en 'newValue'.
  }

  isDarkModeEnabled() {
    return this.darkModeEnabled.asObservable();
  }
  modo(){return this.isDarkModeEnabled()?"light":'dark';}
}
