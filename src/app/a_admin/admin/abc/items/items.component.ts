import { Component, OnInit, Output, Input, EventEmitter, ViewChild} from '@angular/core';
import { AbcModalComponent } from '../abc.component';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Output() data = new EventEmitter<any>();
  @Output() form = new EventEmitter<any>();
  @Input() mode: any = 'add';
  @ViewChild(AbcModalComponent) modal!: AbcModalComponent;
  @Input() modo!: any 
  forms: any = {
    add: 'agregando',
    edit: 'modificando',
    delete: 'borrando',
  }

  openModal() {
    console.log('Llamando al modal que se abra w');
    this.modal.openModal();
  }
  closeModal() { }
  params: any = {
    qr: true,
    info: true,
    add: true
  }
  @Input() found: any = [];
  ngOnInit(): void {
    this.data.emit({
      icon: 'gem',
      description: 'Inventario de pertenencias, para agregar y manejar los artículos disponibles.',
      type: 'Pertenencias',
      response: 'items',
      forms: this.forms,
      searchPlaceholder: 'Inserta el ID de la pertenencia',
      searchLength: 0,
      url: '/items/',
      urls: { 'search': '?id=' },
    });
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
>
  <!-- Detalles del cliente y del artículo -->
  <div class="d-flex align-items-center">
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
  <!-- {{data.revisado }} -->
      </app-abc-card>`,
  styleUrls: ['./items.component.css',
    '../abc.component.css'],
})
export class ItemCardComponent {
  @Input() data!: any;
  @Input() btn!: any;
  formatDate(fecha: string) {
    return fecha.replace('T', ' ').slice(0, 19);
  }

}
