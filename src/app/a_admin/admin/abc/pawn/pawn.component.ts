import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { AbcModalComponent } from '../abc.component';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { ItemsService } from "src/app/services/items.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.css'],
})
export class PawnComponent implements OnInit {
  data = {
    icon: 'cash',
    description:
      'Manejo de empeños, que incluye crear, actualizar y resolver contratos de empeño.',
    type: 'Empeños',
    response: 'items',
    searchPlaceholder: 'Inserta el ID del empeño',
    searchLength: 0,
    url: '/items/',
    urls: { 'search': '?id=' },
    hide: true
  }
  @Input() mode: any = 'add';
  @Input() found: any = [];
  ngOnInit(): void {
  }
  @Output() form = new EventEmitter<any>();
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

  onSave(event: any): void { this.form.emit(event); }
}


@Component({
  selector: 'app-abc-pawn-card',

  template: `<app-abc-card
  [img]="data.imagen"
  class="text-center w-100"
>
<div class="card-body"[attr.data-bs-theme]="modo">
  <div class="d-flex justify-content-center">
    <i class="bi bi-person-fill"></i>
    <h5 class="card-title ms-2">{{data.cliente}} - {{data.articulo}}</h5>
  </div>

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

</div>
<br><br>
<div class="card-footer">
<button
    (click)="sendEvent('edit')"
    class="btn btn-primary text-center"
    type="button"
    style="width: 80%"
>
  <div class="text-center">
    <i class="bi bi-pencil"></i>&nbsp;&nbsp;&nbsp;<span>Ver/Editar</span>
  </div>
</button>
<br><br>
<button
    (click)="sendEvent('edit')"
    class="btn btn-warning text-center"
    type="button"
    style="width: 80%"
>
  <div class="text-center">
    <i class="bi bi-cash"></i>&nbsp;&nbsp;&nbsp;<span>Abonar</span>
  </div>
</button>
</div>
  <!-- {{data.revisado }} -->
      </app-abc-card>`,
  styleUrls: ['./pawn.component.css',
    '../abc.component.css'],
})
export class PawnCardComponent {
  @Input() data!: any;
  @Input() btn!: any;
  @Input() modo!: any;
  @Output() id = new EventEmitter();
  formatDate(fecha: string) {
    return fecha.replace('T', ' ').slice(0, 19);
  }
  sendEvent(mode: string) {
    this.id.emit({
      id: this.data.id,
      mode: mode,
    });
  }

}

@Component({
  selector: 'app-pawn-pay',

  template: `<!-- Cliente (No editable) -->
  <div class="mb-3">
    <label for="itemCliente" class="form-label"><b>Cliente:</b></label>
    <input
      type="text"
      class="form-control"
      id="itemCliente"
      name="cliente"
      [ngModel]="_item.cliente"
      disabled
    />
  </div>

  <!-- Artículo -->
  <div class="mb-3">
    <label for="itemName" class="form-label"><b>Articulo:</b></label>
    <input
      type="text"
      class="form-control"
      id="itemName"
      name="item"
      [(ngModel)]="_item.articulo"
      disabled
    />
  </div>
  <div class="mb-3">
    <label for="itemName" class="form-label"><b>Articulo:</b></label>
    <input
      type="text"
      class="form-control"
      id="itemName"
      name="item"
      [(ngModel)]="_item.articulo"
    />
  </div>

  <div *ngIf="image" class="image-preview d-flex justify-content-center">
    <img
      [src]="image"
      alt="Vista previa de la imagen"
      class="img-thumbnail square-img"
    />
  </div>

  <div class="mb-3 text-end">
    <button type="button" class="btn btn-success" (click)="onPay()">
      Abonar
    </button>
  </div>
  `,
  styleUrls: ['./pawn.component.css',
    '../abc.component.css'],
})
export class PawnPayComponent {
  @Input() data!: any;
  @Input() btn!: any;
  @Input() modo!: any;
  image!: string;
  @Input() id!: any;
  @Input() _item: any = {
    cliente: '',
    articulo: '',
  };
  formatDate(fecha: string) {
    return fecha.replace('T', ' ').slice(0, 19);
  }
  constructor(
    private itemService: ItemsService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.itemService.get(this.id).subscribe((data: any) => {
      this._item = data.items[0];
      this.image = this._item.imagen;
    })
  }
  sendEvent(mode: string) {
    this.id.emit({
      id: this.data.id,
      mode: mode,
    });
  }
  onPay() { }
  // INutil

}
