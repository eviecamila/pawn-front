import { Component, Output, Input, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { AbcModalComponent } from '../abc.component';
import { EditClientComponent } from 'src/app/a_admin/client/edit-client/edit-client.component';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css', '../abc.component.css'],
})
export class ClientsComponent implements OnInit {
  @ViewChild(AbcModalComponent) modal!: AbcModalComponent;
  data = {
    icon: 'person',
    description:
      'Administración de clientes, permitiendo acceder y modificar sus datos.',
    type: 'Clientes',
    response: 'clientes',
    searchPlaceholder: 'Buscar por CURP, ID, ',
    searchLength: 0,
    url: '/clients',
    urls: { search: '?q=' },
  }
  @Input() mode: any = 'add';
  @Input() modo!: any
  creating = false; editing = false; history = false
  pk = 0;
  constructor(
    private darkModeService: DarkModeService,
    private client: ClientService
  ) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }
  openHistoryModal(event: any) {
    this.pk = event
    this.history = true;
    this.openModal();
  }
  openEditModal(event: any) {
    this.pk = event
    this.editing = true;
    this.openModal();
  }
  openNewModal() {
    this.creating = true
    this.modal.openModal();
  }
  openModal() { this.modal.openModal(); }
  closeModal() {
    // this.modal.closeModal();
    this.editing = false;
    this.creating = false;
    this.history=false
  }

  onSave(event: any): void {
    // this.client.register(event);
  }
  @Input() found: any = [];
  ngOnInit(): void { }
}
@Component({
  selector: 'app-client-card',
  template: `<app-abc-card
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
    <div class="card-footer text-center">
<!-- Aquí irán los botones-->
  <!-- Editar -->
  <button
    (click)="event(edit, data.id)"
    class="btn btn-primary text-center"
    type="button"
    style="width: 80%"
>
  <div class="text-center">
    <i class="bi bi-pencil"></i>&nbsp;&nbsp;&nbsp;<span>Ver/Editar</span>
  </div>
</button>
<br><br>
    <!-- Guardar -->
    <button
    (click)="event(history, data.id)"
    class="btn btn-success text-center"
    type="button"
    style="width: 80%"
>
  <div class="text-center">
    <i class="bi bi-clock-history"></i>&nbsp;&nbsp;&nbsp;<span>Ver articulos</span>
  </div>
</button>
    <!-- Generame otro -->
</div>
  </div>
  </app-abc-card>
  `,
  styleUrls: ['./clients.component.css', '../abc.component.css'],
})
export class ClientCardComponent {
  @Input() data!: any;
  @Output() edit = new EventEmitter();
  @Output() history = new EventEmitter();
  event(emitter:any, id: number) {
    emitter.emit(id);
  }
  onHistory(id: number) { }
}
