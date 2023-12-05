import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { ItemsService } from "src/app/services/items.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-autorize-item',
  templateUrl: './authorize-item.component.html'
})
export class AuthorizeItemComponent implements OnInit {
  onReset() {

  }
  dias = [30, 90, 180, 360];
  selectedDays!: any
  image!: string;
  @Input() id!: any;
  @Input() _item: any = {
    cliente: '',
    articulo: '',
  };

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
  onAuthorize() {
    this.itemService.pawn(
      {
        id: this._item.id,
        dias: this._item.dias
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
      location.reload()
    }, 2000);

  }

}
