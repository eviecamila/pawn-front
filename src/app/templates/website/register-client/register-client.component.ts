import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

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
    private clientService: ClientService
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
          clientService.clientExists({ type: "curp", data: value }).subscribe(data => {
            console.log(data)
          })
        }
      });

    if (emailControl)
      emailControl.valueChanges.subscribe(value => {
        clientService.clientExists({ type: "email", data: value }).subscribe(data => {
          console.log(data)
        })
      });

    if (phoneControl)
      phoneControl.valueChanges.subscribe(value => {
        clientService.clientExists({ type: "phone", data: value }).subscribe(data => {
          console.log(data)
        })
        if (value.length === 10)
          console.log(value);
      })

  }

  onSubmit() {
    if (this.clienteForm.valid) {
      // El formulario es válido; puedes enviar los datos.
      console.log('Formulario válido, datos enviados:', this.clienteForm.value);
      this.clientService.register(this.clienteForm.value).subscribe(data => {console.log(data);});

    } else {
      // El formulario no es válido; muestra mensajes de error o realiza otras acciones.
      console.log('Formulario no válido, verifica los campos.');
    }
  }
}
