import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { AbcService } from './abc.service';
import { QrScannerComponent } from 'src/app/templates/qr-scanner/qr-scanner.component';
// ABC MODAL
@Component({
  selector: 'app-abc-modal',
  template: `

  <div
  [ngClass]="{
    active: modal
  }"
  class="modal-container"
  [ngStyle]="{
    background: modo === 'dark' ? '#0008' : '#fff8',
    'z-index': !modal ? -2 : 1
  }"
>
  <div
    [attr.data-bs-theme]="modo"
    class="modal-content"
    [ngStyle]="{ background: modo === 'dark' ? '#000f' : '#ffff' }"
  >
    <button (click)="hideAlert()" class="btn-close"></button>
    <ng-content></ng-content>
    <button (click)="hideAlert()" class="btn" [attr.data-bs-theme]="modo">Cerrar</button>
  </div>
</div>
    `,
  styleUrls: ['./abc.component.css']
})
export class AbcModalComponent implements OnInit {
  modo = 'dark'
  modal: boolean = false;
  valid: boolean = false;
  title: string = '32'
  ngOnInit(): void {

  }
  toggleModal() {
    this.modal = !this.modal;
  }
  hideAlert() { this.modal = false; }
}

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css'],
})
export class AbcComponent implements OnInit {
  // @ViewChild(AbcModalComponent) modalComponent!: AbcModalComponent;
  // @ViewChild(AbcModalComponent) qrScannerModal!: AbcModalComponent;
  // @ViewChild(QrScannerComponent) qrScanner!: QrScannerComponent;

  data: any = {};
  selectedMode: string = 'Selecciona un modo';

  modal!: AbcModalComponent

  qr: boolean = false;


  instance!: any;

  searchText: string = '';
  modo!: string;
  constructor(
    private abc: AbcService,
    private darkModeService: DarkModeService
  ) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }

  ngOnInit() { }

  onActivate(component: any) {
    this.instance = component;
    component.data.subscribe((data: any) => { this.data = data; });
  }

  onModeChange() { this.instance.mode = this.selectedMode; }
  onSearchChange() {

    // buscar
    // console.log(this.searchText.length === this.data.searchLength?'Aqui deberia buscar tu Empleado con el RFC '+ this.searchText:'No valido');
    // no hacer nada aun
  }
  onSearch() {
    if (this.searchText.length === this.data.searchLength || !this.searchText) {
      this.abc.buscar(this.data.url + this.data.urls.search, this.searchText).subscribe((data: any) => {
        console.log(data);
        this.instance.found = data[this.data.response]
      })


    }
  }
  onModalToggle() {
    // this.modalComponent.toggleModal();
  }
  onScan(event: string) {
    alert(event);
  }
  toggleScanner() {
    // this.qrScannerModal.toggleModal();
    // this.qrScanner.toggleScanner();
  }
}

@Component({
  selector: 'app-abc-card',
  template: `
    <div class="card" style="padding:6%">
      <div class="card-body" style="padding-left: 20%" [attr.data-bs-theme]="modo">
        <ng-content></ng-content>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-md-between mt-3">
        <button *ngIf="btn.editar" class="btn btn-warning mb-2 mb-md-0" type="button" style="width: 100%; max-width: 100%; max-width-md: 20%">
          <i class="bi bi-pencil-square"></i> Editar
        </button>
        <div style="width:30px"></div>
        <button *ngIf="btn.desactivar" class="btn btn-danger" type="button" style="width: 100%; max-width: 100%; max-width-md: 20%">
          <i class="bi bi-power"></i> Desactivar
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./abc.component.css']
})
export class AbcCardComponent implements OnInit {
  @Input() btn: any = {};

  modo!: string;
  constructor(
    private darkModeService: DarkModeService
  ) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }
  ngOnInit(): void {

  }
}
@Component({
  selector: 'app-abc-card-container',
  template: `
    <div class="container" [attr.data-bs-theme]="modo">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./abc.component.css']
})
export class AbcCardContainerComponent implements OnInit {
  modo!: string;
  constructor(
    private darkModeService: DarkModeService
  ) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }
  ngOnInit(): void {

  }
}

