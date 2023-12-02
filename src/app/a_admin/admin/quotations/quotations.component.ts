import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ItemsService } from 'src/app/services/items.service';
import { AbcModalComponent } from '../abc/abc.component';
@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css'],
})
export class PendingQuotationsComponent implements OnInit {
  @ViewChild(AbcModalComponent) modal!: AbcModalComponent;
  found: any = []
  modo!: any
  id: any = null;
  constructor(
    private itemsService: ItemsService,
    private clientService: ClientService
  ) {
    this.itemsService.pending().subscribe((data: any) => {
      this.found = data.items
      console.log(this.found)
    });
  }
  ngOnInit(): void {

  }
  buscarItem = (id: any) => this.found.find((item: any) => item.id === id)

  onReview(id: any) {
    this.id = id
    this.modal.openModal()
  }
  onPawn(id: any) {
    this.id = id
  }
}
