import { Component } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/model/item.model';
import { ToastrService } from 'ngx-toastr';
import { PawnService } from 'src/app/services/pawn.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
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
  items: any;
  constructor(
    private itemService: ItemsService,
    private toastr: ToastrService,
    private pawn: PawnService,
    public darkModeService: DarkModeService,
  ) {
    this.pawn.tiposItem().subscribe((items: any) => {
      this.items = items['tipos_item'];
      console.log(items);
    })
  }
  createNewItem(): void {
    this.itemService.createItem(this.newItem)
      .subscribe((Response: any) => {
        if (Response.status==='OK'){
          this.toastr.success(Response.message);
        }
        else{
          this.toastr.error(Response.message);
        }
      });
    // console.log(this.newItem);

  }
}
