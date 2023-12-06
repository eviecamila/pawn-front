import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css',
    '../abc.component.css'],
})
export class EmployeeComponent implements OnInit {
  modo!: string;
  constructor(
    private darkModeService: DarkModeService
  ) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }

  data = {
    icon: 'headset',
    description: 'Gestión de empleados, incluyendo agregar, dar de baja y modificar información del empleado.',
    type: 'Empleados',
    response: 'empleados',
    searchPlaceholder: 'RFC: PPLU020222HD3',
    searchLength: 13,
    url: '/rrhh/',
    urls: { 'search': '?rfc=' },
    buttons: {
      edit: true,
      delete: true,
    }
  }
  @Input() mode: any = 'add';

  @Input() found: any = [];
  ngOnInit(): void {

  }

}


@Component({
  selector: 'app-employee-card',
  template: `<app-abc-card [botones]="[
    {icon:'power',
  color:'danger',event:'onDeactivate()', name:'Desactivar'},
  {icon:'power',
  color:'danger',event:'onChupada()', name:'Chupar'},

  ]">
  <div class="">

<div class="card-body"><div class="d-flex justify-content-center">
          <!-- Icono de usuario para el nombre -->
          <i class="bi bi-person-fill"></i>
          <h5 class="card-title ms-2">{{data.nombre}} {{data.ap1}} {{data.ap2}} </h5>
        </div>
        <h6 class="card-subtitle mb-2 text-muted">
          <!-- Icono de maletín para el puesto -->
          <i class="bi bi-briefcase-fill"></i> {{data.puesto}}
        </h6>
        <!-- Icono de identificación para el RFC -->
        <p class="card-text m-0">
          <i title="RFC" class="bi bi-upc-scan"></i> RFC: {{data.rfc}}
        </p>
        <!-- Icono de seguro social para el NSS -->
        <p class="card-text m-0">
          <i title="Numero de seguro social" class="bi bi-card-checklist"></i>
          NSS: {{data.nss}}
        </p>
        <!-- Icono de teléfono para el número de teléfono -->
        <p class="card-text m-0">
          <i title="Telefono" class="bi bi-telephone-fill"></i> Teléfono:
          {{data.telefono}}
        </p>
        <!-- Icono de moneda para el salario -->
        <p class="card-text m-0">
          <i title="Salario" class="bi bi-currency-dollar"></i> Salario: &dollar;{{data.salario}}
        </p>
        <!-- Icono de verificación para el estado activo/inactivo -->
        <p class="card-text m-0">
          <i title="Activo" [class]="'bi bi-'+data.activo?'check2-circle':'x-circle-fill'"></i> Activo:
          <span class="text-success"> {{data.activo ? 'Sí' : 'No' }}</span>
        </p></div>
        <br><br>
        <div class="card-footer">asd
</div></div>
      </app-abc-card>`,
  styleUrls: ['./employee.component.css',
    '../abc.component.css'],
})
export class EmployeeCardComponent {
  @Input() data!: any;
  onDeactivate() {
    console.log('me desactivan')
  }
  onChupada() {
    console.log('me la chupas')
  }


}
