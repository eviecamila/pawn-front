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
      'max-height': '80%',
      'max-width': '80%',

    }"
        style="overflow-y: auto"
        id="modal"
      >
        <div style="width:15px;height:15px">
          <button
            (click)="hideAlert()"
            class="rounded-circle btn-close "
          ></button>
        </div>
        <ng-content></ng-content>
        <br><br>
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
    if (this.modal) {
      this.open.emit();
    }
    else this.close.emit()
  }
  openModal() {
    let item = document.getElementById('modal')
    if (item) { item.scrollTop = 0 }
    this.modal = true;
    this.open.emit();
  }
  closeModal() { this.modal = false; this.close.emit() }
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
  onSave(event: any): void { }
  onNew() {
    console.log('Llamando a la instancia que abra el modal');
    console.log(this.instance)
    if (!this.instance) return;
    this.instance.openModal();
  }
  async ngOnInit() {
    await this.instance.isInstanceReady
   }

  isInstanceReady:boolean = false;
  onActivate(component: any) {
    this.instance = component;
    if (this.instance) {
      this.isInstanceReady = true;
      component.data.subscribe((data: any) => {
        this.data = data;
        console.log(this.instance);
      });
    }
  }

  onModeChange() {
    this.instance.mode = this.selectedMode;
  }
  onSearchChange() {
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
    if (this.qrScannerModal) {
      this.qrScannerModal.openModal();
      this.qrScanner.toggleScanner();
    }
  }
  closeScanner() {
    if (this.qrScannerModal) {
      this.qrScannerModal.closeModal()
      this.qrScanner.toggleScanner();
    }
  }
}

@Component({
  selector: 'app-abc-card',
  template: `
    <div class="grid-item image">
          <img *ngIf="img" [src]="img"class="img-fluid square-img rounded"
          />
        </div>
        <div class="grid-item info text-center">
        <ng-content></ng-content>
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
  ngOnInit(): void { }
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
  ngOnInit(): void { }
}
