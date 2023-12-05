import { Component, Output, Input, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { AbcModalComponent } from '../abc.component';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css', '../abc.component.css'],
})
export class ClientsComponent implements OnInit {
  @ViewChild(AbcModalComponent) modal!: AbcModalComponent;
  @Output() data = new EventEmitter<any>();
  @Input() mode: any = 'add';
  @Input() modo!: any
  constructor(
    private darkModeService: DarkModeService,
    private client: ClientService
  ) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }
  openModal() {
    this.modal.openModal();
  }
  closeModal() {
    this.modal.closeModal();
  }

  onSave(event: any): void {
    // this.client.register(event);
  }
  @Input() found: any = [];
  forms: any = {
    add: 'agregando',
    edit: 'modificando',
    delete: 'borrando',
  };
  ngOnInit(): void {
    this.data.emit({
      icon: 'person',
      description:
        'Administración de clientes, permitiendo acceder y modificar sus datos.',
      type: 'Clientes',
      response: 'clientes',
      forms: this.forms,
      searchPlaceholder: 'CURP: PPLU020222MSLLLPA5',
      searchLength: 18,
      url: '/clients',
      urls: { search: '?curp=' },
    });
  }

}

@Component({
  selector: 'app-client-card',
  template: `<app-abc-card
    [btn]="{
    editar: true,
    desactivar: false,
  }"
    [botones]="[
      {icon:'power',
    color:'danger',event:'onDeactivate()', name:'Desactivar'},
    {icon:'power',
    color:'danger',event:'onChupada()', name:'Chupar'},

    ]"
  ><div class="">

  <div class="card-body">
    <div class="d-flex justify-content-center">
      <!-- Icono de usuario para el nombre -->
      <i class="bi bi-person-fill"></i>
      <h5 class="card-title ms-2">{{ data.nombre }}</h5>
    </div>
    <h6 class="card-subtitle mb-2 text-muted">
      <!-- Icono de casa para la dirección -->
      <i class="bi bi-house-fill"></i> {{ data.direccion }}
    </h6>
    <!-- Icono de identificación para el CURP -->
    <p class="card-text m-0">
      <i title="CURP" class="bi bi-upc-scan"></i> CURP: {{ data.curp }}
    </p>
    <!-- Icono de teléfono para el número de teléfono -->
    <p class="card-text m-0">
      <i title="Telefono" class="bi bi-telephone-fill"></i> Teléfono:
      {{ data.phone }}
    </p>
    <!-- Icono de correo electrónico para el email -->
    <p class="card-text m-0">
      <i title="Email" class="bi bi-envelope-fill"></i> Email: {{ data.email }}
    </p></div>
    <div class="card-footer">
asd
</div>
  </div>
  </app-abc-card>
  `,
  styleUrls: ['./clients.component.css', '../abc.component.css'],
})
export class ClientCardComponent {
  @Input() data!: any;
}
