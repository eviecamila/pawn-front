import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { AbcModalComponent } from '../abc.component';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  data = {
    icon: 'gem',
    description: 'Inventario de pertenencias, para agregar y manejar los artículos disponibles.',
    type: 'Pertenencias',
    response: 'items',
    searchPlaceholder: 'Inserta el ID de la pertenencia',
    searchLength: 0,
    url: '/items/',
    urls: { 'search': '?estado=Empeñado&id=' },
  }
  @Output() form = new EventEmitter<any>();
  @Input() mode: any = 'add';
  @ViewChild(AbcModalComponent) modal!: AbcModalComponent;
  @Input() modo!: any
  constructor(private darkModeService: DarkModeService) {
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
  params: any = {
    qr: true,
    info: true,
    add: true
  }
  @Input() found: any = [];
  ngOnInit(): void {
  }
  onSave(event: any): void { this.form.emit(event); }
}



@Component({
  selector: 'app-abc-item-card',

  template: `<app-abc-card [btn]="{
    editar: true,
    desactivar: true,
  }"
  [img]="data.imagen"
  class="text-center w-100"
  [botones]="[
      {icon:'power',
    color:'danger',event:'onDeactivate()', name:'Desactivar'},
    {icon:'power',
    color:'danger',event:'onChupada()', name:'Chupar'},

    ]"
>
<div class="card-body"[attr.data-bs-theme]="modo">
  <div class="d-flex justify-content-center">
    <i class="bi bi-person-fill"></i>
    <h5 class="card-title ms-2">{{data.cliente}} - {{data.articulo}}</h5>
  </div>

  <!-- Estado del artículo -->
  <h6 class="card-subtitle mb-2 text-muted">
    <i class="bi bi-clipboard-check-fill"></i>
    Estado: {{data.estado}}
  </h6>

  <!-- Características del artículo -->
  <p class="card-text m-0">
    <i title="Características" class="bi bi-card-text"></i>
    Características:
    <br>&nbsp;&nbsp;{{data.caracteristicas}}
  </p>

  <!-- Observaciones sobre el artículo -->
  <p class="card-text m-0">
    <i title="Observaciones" class="bi bi-chat-right-text-fill"></i>
    Observaciones:
    <br>&nbsp;&nbsp;{{data.observaciones}}
  </p>

  <!-- Fechas importantes -->
  <p class="card-text m-0">
    <i title="Fecha de Cotizacion" class="bi bi-calendar-check-fill"></i>
    Cotizacion: {{data.fecha_cotizacion.slice(0,10) }} {{data.fecha_cotizacion.slice(11,19)}}
  </p>
  <p class="card-text m-0">
    <i title="Fecha de Ingreso" class="bi bi-calendar-check-fill"></i>
    Ingreso: {{data.fecha_ingreso.slice(0,10) }} {{data.fecha_ingreso.slice(11,19)}}
  </p>
  <p class="card-text m-0">
    <i title="Fecha Límite" class="bi bi-calendar-x-fill"></i>
    Fecha Limite: {{ data.fecha_limite.slice(0,10) }} {{data.fecha_limite.slice(11,19)}}
  </p>
  <p class="card-text m-0">
          <i title="Revisado" [class]="'bi bi-'+(data.revisado?'check2-circle':'x-circle-fill')"></i>
          Revisado por el valuador: <span [class]="'text-'+(data.revisado?'success':'danger')"> {{data.revisado ? 'Sí' : 'No' }}</span>
  </p>
</div>
<br><br>
<div class="card-footer">
asd
</div>
  <!-- {{data.revisado }} -->
      </app-abc-card>`,
  styleUrls: ['./items.component.css',
    '../abc.component.css'],
})
export class ItemCardComponent {
  @Input() data!: any;
  @Input() btn!: any;
  @Input() modo!: any;
  formatDate(fecha: string) {
    return fecha.replace('T', ' ').slice(0, 19);
  }

}
