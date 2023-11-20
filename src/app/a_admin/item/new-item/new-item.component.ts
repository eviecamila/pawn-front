import { Component } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {

  newItem: Item = {
    curp: '',
    item: '',
    specs: '',
    extras: '',
    dias: 0,
    cotizacion: 0
  };

  constructor (private itemService: ItemsService) {}

  createNewItem(): void {
    this.itemService.createItem(this.newItem)
      .subscribe((Response) => {
        console.log('Item creado', Response);
      });
      
  }
}
