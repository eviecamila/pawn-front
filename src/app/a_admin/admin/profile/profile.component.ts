import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';


declare var $: any;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  isFormEditable: boolean = true;

  toggleFormEdit() { this.isFormEditable = !this.isFormEditable; }
  editEmployee() {
    if (this.newEmployee !== this.newEmployee2) {
      $.blockUI({
        message: '<div style="display:grid;place-items:center"><img width="15%" src="assets/cagando.gif" style="position:relative;right:0%;top:30%"></div>',
        overlayCSS: {
          backgroundColor: '#1b2024',
          opacity: 0.8,
          zIndex: 1200,
          cursor: 'wait',
        }, css: {
          border: 0,
          color: '#fff',
          padding: 0,
          zIndex: 1201,
          backgroundColor: 'transparent',
        },
      });
      // console.log(this.newEmployee)
      this.employee.edit(this.newEmployee).subscribe((r: any) => {
        // Mensaje
        // console.log(r)
        if (r.status === "OK") { this.toastr.success(r.message); }
        else { this.toastr.error(r.message); }
        setTimeout(() => {
          $.unblockUI();
          location.reload();
        }, 2000);
      })
    }
    else {
      this.toastr.warning("No se modificó nada");
      this.toggleFormEdit();
    }
  }
  newEmployee: any = {
    id: 0,
    nombre: "",
    apellido1: "",
    apellido2: "",
    rfc: "",
    RFC: "",
    nss: "",
    telefono: "",
    puesto: "",
    area: "",
    salario: 0,
    // Agrega valores para otros campos si es necesario
  };
  newEmployee2: any = {};

  constructor(
    private auth: AuthService,
    private employee: EmployeeService,
    private toastr: ToastrService
  ) {
    $.blockUI({
      message: '<div style="display:grid;place-items:center"><img width="15%" src="assets/cagando.gif" style="position:relative;right:0%;top:30%"></div>',
      overlayCSS: {
        backgroundColor: '#1b2024',
        opacity: 0.8,
        zIndex: 1200,
        cursor: 'wait',
      }, css: {
        border: 0,
        color: '#fff',
        padding: 0,
        zIndex: 1201,
        backgroundColor: 'transparent',
      },
    });
    this.auth.currentUser(localStorage.getItem('token')).subscribe((res: any) => {
      this.newEmployee = res
      this.newEmployee['RFC'] = res.rfc
      this.newEmployee2 = this.newEmployee;
    });
    $.unblockUI()
  }

}
