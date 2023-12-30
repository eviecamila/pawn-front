import { Component, Input } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  selectedDays!: any
  image!: string;
  @Input() id!: any;
  @Input() _item: any = {
    cliente: '',
    articulo: '',
  };
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

  onMessage() {
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
    this.itemService.message(
      {
        id: this._item.id,
        message: this.mensaje
      }
    ).subscribe((response: any) => {
      // Manejo de la respuesta
      if (response.status === 'OK') {
        this.toastr.success(response.message);
      } else {
        this.toastr.error(response.message);
      }
    });
    setTimeout(() => {
      $.unblockUI();
      location.reload()
    }, 3000);

  }
}
