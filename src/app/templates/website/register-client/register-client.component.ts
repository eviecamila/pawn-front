import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';

let tiposData: any = {
  phone: 'teléfono',
  email: 'correo electrónico',
  curp: 'CURP'
}

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css'],
  providers: [ClientService]
})
export class RegisterClientComponent {
  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private toastr: ToastrService
  ) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      curp: ['', [Validators.required, Validators.minLength(18)]],
      email: ['', [Validators.required, Validators.email]]
    });

    const curpControl = this.clienteForm.get('curp');
    const emailControl = this.clienteForm.get('email');
    const phoneControl = this.clienteForm.get('telefono');
    if (curpControl)
      curpControl.valueChanges.subscribe(value => {
        if (value.length === 18) {
          this.verifyExists("curp", value, true);
        }
      });

    if (emailControl)
      emailControl.valueChanges.subscribe(value => {
        this.verifyExists("email", value, true);
      });

    if (phoneControl)
      phoneControl.valueChanges.subscribe(value => {

        if (value.length === 10)
          this.verifyExists("phone", value, true);
      })

  }

  verifyExists(tipo: string, valor: string, alerta: boolean):any {
    this.clientService.clientExists({ type: tipo, data: valor }).subscribe(data => {
      if (data === '1' && alerta) this.toastr.error(`${tiposData[tipo].charAt(0).toUpperCase() + tiposData[tipo].slice(1)} ya existente.`);
      return data === '1';
    })
  }
  onSubmit() {
    if (this.clienteForm.valid) {
      // El formulario es válido; puedes enviar los datos.

      // Obtener los valores de curp, telefono y correo
      const curpControl = this.clienteForm.get('curp');
      const telefonoControl = this.clienteForm.get('telefono');
      const emailControl = this.clienteForm.get('email');

      if (curpControl && telefonoControl && emailControl) {
        const curp = curpControl.value;
        const telefono = telefonoControl.value;
        const email = emailControl.value;
      if (
        !this.verifyExists('email', email, false) &&
        !this.verifyExists('curp', curp, false) &&
        !this.verifyExists('phone', telefono, false)
        ){
          this.clientService.register(this.clienteForm.value).subscribe((data: any) => {
            data.status === 'OK' ?
              this.toastr.success("Cliente registrado exitosamente")
              : this.toastr.error(data.message);
              setTimeout(() => {
                // Recarga la página después de 2 segundos
                location.reload();
              }, 2000); // 2000 milisegundos = 2 segundos

          });
        }
        // Enviar los datos o realizar otras acciones con los valores
        else{
          this.toastr.error("Datos ya existentes");
          setTimeout(() => {
            // Recarga la página después de 2 segundos
            location.reload();
          }, 1000); // 2000 milisegundos = 2 segundos
        }
      }
    } else {
      this.toastr.error("Campos Vacios");
    }

  }

}
