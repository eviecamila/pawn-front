import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sellings',
  templateUrl: './sellings.component.html',
  styleUrls: ['./sellings.component.css'],
})
export class SellingsComponent implements OnInit {
  @Output() data = new EventEmitter<any>();
  @Input() mode: any = 'add';
  forms: any = {
    add: 'agregando',
    edit: 'modificando',
    delete: 'borrando',
  };
  params: any = {
    qr: true,
    info: true,
    add: true,
  };
  ngOnInit(): void {
    this.data.emit({
      icon: 'wallet2',
      description:
        'Registro y seguimiento de ventas, incluyendo detalles de transacciones y registros financieros.',
      type: 'Ventas',
      forms: this.forms,
      searchPlaceholder: 'Inserta el ID de la venta',
    });
  }
}
