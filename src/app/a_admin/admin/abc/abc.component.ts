import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { AbcService } from './abc.service';
import { QrScannerComponent } from 'src/app/templates/qr-scanner/qr-scanner.component';
import { ItemsService } from 'src/app/services/items.service';
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
        [ngStyle]="{
      background: modo === 'dark' ? '#000f' : '#ffff',
      'max-height': '400px',

    }"
        style="overflow-y: auto"
      >
        <div style="width:15px;height:15px">
          <button
            (click)="hideAlert()"
            class="rounded-circle btn-close "
          ></button>
        </div>
        <ng-content></ng-content>
        <button (click)="hideAlert()" class="btn" [attr.data-bs-theme]="modo">
          Cerrar
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./abc.component.css'],
})
export class AbcModalComponent implements OnInit {
  @Output() close = new EventEmitter<any>();
  @Output() open = new EventEmitter<any>();
  modo!: string;
  modal: boolean = false;
  valid: boolean = false;
  title: string = '32';
  ngOnInit(): void {
    this.open.emit();
  }
  toggleModal() {
    this.modal = !this.modal;
  }
  openModal() {
    console.log('Abriendo modal w');
    this.modal = true;
  }
  closeModal() {
    this.modal = false;
  }
  hideAlert() {
    this.modal = false;
    this.close.emit();
  }
  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }
}

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css'],
})
export class AbcComponent implements OnInit {
  // @ViewChild(AbcModalComponent) modalComponent!: AbcModalComponent;
  @ViewChild(AbcModalComponent) qrScannerModal!: AbcModalComponent;
  @ViewChild(QrScannerComponent) qrScanner!: QrScannerComponent;

  data: any = {};
  selectedMode: string = 'Selecciona un modo';

  modal!: AbcModalComponent;

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
  onSave(event: any): void {}
  onNew() {
    console.log('Llamando a la instancia que abra el modal');
    this.instance.openModal();
  }
  ngOnInit() {}

  onActivate(component: any) {
    this.instance = component;
    component.data.subscribe((data: any) => {
      this.data = data;
    });
  }

  onModeChange() {
    this.instance.mode = this.selectedMode;
  }
  onSearchChange() {
    // buscar
    // console.log(this.searchText.length === this.data.searchLength?'Aqui deberia buscar tu Empleado con el RFC '+ this.searchText:'No valido');
    // no hacer nada aun
  }
  onSearch() {
    if (
      !this.data.searchLength ||
      this.searchText.length === this.data.searchLength ||
      !this.searchText
    ) {
      this.abc
        .buscar(this.data.url + this.data.urls.search, this.searchText)
        .subscribe((data: any) => {
          console.log(data);
          this.instance.found = data[this.data.response];
        });
    }
  }
  onModalToggle(modal: any) {
    modal.toggleModal();
  }
  onScan(event: string) {
    console.log(event);
    this.closeScanner();
    this.searchText = event;
    this.onSearch();
  }
  openScanner() {
    this.qrScannerModal.modal = true;
    this.qrScanner.toggleScanner();
  }
  closeScanner() {
    this.qrScannerModal.modal = false;
    this.qrScanner.toggleScanner();
  }
}

@Component({
  selector: 'app-abc-card',
  template: `
    <div class="grid-item image">
          <img *ngIf="img" [src]="img"class="img-fluid square-img rounded"
          />
        </div>
        <div class="grid-item info">
          <div class="card-body" [attr.data-bs-theme]="modo">
            <ng-content></ng-content>
            <!-- ASD -->
          </div>
          <div class="col justify-content-md-between mt-3">
            <div *ngFor="let btn of botones">
              <button
                (click)="btn.event"
                [class]="'btn btn-' + btn.color"
                type="button"
                style="width: 100%; max-width: 100%; max-width-md: 20%"
              >
                <i [class]="'bi bi-' + btn.icon"></i> {{ btn.name }}
              </button>
              <div style="height:10px"></div>
            </div>
          </div>
        </div>

  `,
  styleUrls: ['./abc.component.css'],
})
export class AbcCardComponent implements OnInit {
  @Input() btn: any = {};
  @Input() img!: any;
  @Input() botones!: any;

  modo!: string;
  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }
  ngOnInit(): void {}
}
@Component({
  selector: 'app-abc-card-container',
  template: `
    <!-- <div class="container" [attr.data-bs-theme]="modo">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5">
          <ng-content></ng-content>
        </div>
      </div>
    </div> -->
    <div class="container-xl">
      <div class="row text-center">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./abc.component.css'],
})
export class AbcCardContainerComponent implements OnInit {
  modo!: string;
  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }
  ngOnInit(): void {}
}
