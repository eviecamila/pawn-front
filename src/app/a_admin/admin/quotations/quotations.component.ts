import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { AbcModalComponent } from '../abc/abc.component';
import { EditItemComponent } from '../../item/edit-item/edit-item.component';
import { AuthorizeItemComponent } from '../../item/authorize-item/authorize-item.component';
import { EditQuotationComponent } from '../../item/quotation/quotation.component';
@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css'],
})
export class PendingQuotationsComponent implements OnInit {
  @ViewChild(AbcModalComponent) modal!: AbcModalComponent;
  @ViewChild(EditQuotationComponent) formEdit!: EditQuotationComponent;

  @ViewChild(AuthorizeItemComponent) formAuthorize!: AuthorizeItemComponent;
  found: any = []
  modo!: any
  id: any = null;
  editing: boolean = false;
  authorizing: boolean = false;
  messaging: boolean = false;
  rejecting: boolean = false;
  constructor(
    private itemsService: ItemsService,
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
    this.id = id;
    console.log(this.id)
    this.editing = true;
    this.modal.openModal();
    this.formEdit.ngOnInit()
  }

  onPawn(id: any) {
    this.id = id;
    console.log(this.id)
    this.authorizing = true;
    this.modal.openModal()
  }
  onMessage(id: any) {
    this.id = id;
    console.log(this.id)
    this.messaging = true;
    this.modal.openModal()
  }
  onReject(id: any) {
    this.id = id;
    console.log(this.id)
    this.rejecting = true;
    this.modal.openModal()
  }
  onOpenModal() {

  }

  onCloseModal() {
    this.editing = false;
    this.messaging = false;
    this.authorizing = false;
    this.rejecting = false;
    // console.log('cerradx')
  }
}
