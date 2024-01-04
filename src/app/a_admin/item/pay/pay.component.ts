import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit{
  liquidar = false;
  _item!:any; image!:any;
  montoAbonar!:any;
  montoLocked!:any;
  pagarTotal!:any;
  @Input() id!:any

  constructor(private items: ItemsService){}

  onPay(){}
  ngOnInit(): void {
    // console.log(this.id)
    if (this.id){
      this.items.get(this.id).subscribe((data:any)=>{
        this._item = data.items[0]
      })
    }
  }
  onLiquidar(){
    if (this.pagarTotal){this.montoAbonar = this._item.deuda}
    this.montoLocked=this.pagarTotal
  }
}
