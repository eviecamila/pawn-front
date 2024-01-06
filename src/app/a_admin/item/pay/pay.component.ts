import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  liquidar = false;
  _item!: any; image!: any;
  montoAbonar!: any;
  montoLocked!: any;
  pagarTotal!: any;
  @Input() id!: any

  constructor(
    private items: ItemsService,
    private toastr: ToastrService
  ) { }

  onPay() {
    this.items.pay({
      id: this._item.id,
      abono: this.montoAbonar
    }).subscribe((data: any) => {
      if (data.status == 'OK') this.toastr.success(data.message)
      else this.toastr.warning(data.message)
      location.reload();
    })
  }
  ngOnInit(): void {
    // console.log(this.id)
    if (this.id) {
      this.items.get(this.id).subscribe((data: any) => {
        this._item = data.items[0]
      })
    }
  }
  onLiquidar() {
    if (this.pagarTotal) { this.montoAbonar = this._item.deuda }
    this.montoLocked = this.pagarTotal
  }
}
