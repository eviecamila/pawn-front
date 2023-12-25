import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {
  t = false;;
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
    private toastr: ToastrService,
    private route: ActivatedRoute,) {
    this.route.queryParams.subscribe((p: any) => {
      this.t = p.t ? true : false;
      this.newEmployee.rfc = p.curp ? p.curp.toUpperCase() : ''
    })

  }
  createNewEmployee() {
    console.log(this.newEmployee)
  }
}
