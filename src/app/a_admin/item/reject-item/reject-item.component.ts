import { Component, Input } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-reject-item',
  templateUrl: './reject-item.component.html',
  styleUrls: ['./reject-item.component.css']
})
export class RejectItemComponent {
  image!: string;
  predefinedReasons: string[] = ['Pide mucho', 'No califica para el préstamo', 'Está muy dañado', 'Sospecha de que es ajeno'];
  selectedReasons: string[] = [];
  @Input() id!: any;
  @Input() _item: any = {
    cliente: '',
    articulo: '',
  };
  selectedReason: string = '';
  mensaje: string = '';
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

  onDaysChange(event: any) { this._item.dias = parseInt(event.target.value) }
  onReject() {
    $.blockUI({
      message: '<div style="display:grid;place-items:center"><img width="15%" src="assets/cagando.gif" style="position:relative;right:0%;top:30%"></div>',
      overlayCSS: {
        backgroundColor: '#1b2024',
        opacity: 0.8,
        zIndex: 1200,
        cursor: 'wait',
      },
      css: {
        border: 0,
        color: '#fff',
        padding: 0,
        zIndex: 1201,
        backgroundColor: 'transparent',
      },
    });
    const selectedReasonIndexes: number[] = this.selectedReasons.map(reason => this.predefinedReasons.indexOf(reason) + 1);
    this.itemService.reject(
      {
        id: this._item.id,
        reasons: selectedReasonIndexes,
        // reason: this.reason
        message: this.mensaje? this.mensaje : null
      }
    ).subscribe((response: any) => {
      // Manejo de la respuesta
      if (response.status === 'OK') {
        this.toastr.success(response.message);
      } else {
        this.toastr.error(response.message);
      }
    });
    $.unblockUI();
    setTimeout(() => {
      location.reload()
    }, 3000);

  }
  addCustomReason(): void {
    if (this.selectedReason && !this.selectedReasons.includes(this.selectedReason)) {
      this.selectedReasons.push(this.selectedReason);
      this.selectedReason = ''; // Limpiar el valor seleccionado después de agregarlo a la lista
    }
  }

  removeReason(reason: string): void {
    const index = this.selectedReasons.indexOf(reason);
    if (index !== -1) {
      this.selectedReasons.splice(index, 1);
    }
  }
}
