import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};
  showPassword: boolean = false;
  modo!: string;
  constructor(
    private darkModeService: DarkModeService
  ) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }
  onSubmit() {
    // Aquí manejarías el envío del formulario, como llamar a un servicio de autenticación.
    console.log('Login', this.model);
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
