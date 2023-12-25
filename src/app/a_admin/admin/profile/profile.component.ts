import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  isFormEditable: boolean = true;

  toggleFormEdit() {
    this.isFormEditable = !this.isFormEditable;
  }
  newEmployee = {
    id: 0,
    nombre: "",
    apellido1: "",
    apellido2: "",
    rfc: "",
    nss: "",
    telefono: "",
    puesto: "",
    area: "",
    salario: 0,
    // Agrega valores para otros campos si es necesario
  };

  constructor(
    private auth: AuthService
  ) {
    this.auth.currentUser(localStorage.getItem('token')).subscribe((res: any) => {
      this.newEmployee = res
    });
  }

}
