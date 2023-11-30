import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ItemsService } from 'src/app/services/items.service';
@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css'],
})
export class QuotationsComponent implements OnInit{
  found:any=[]
  constructor(
    private itemsService: ItemsService,
    private clientService: ClientService
  ) {

  }
  ngOnInit(): void {
    console.log('pemne')
    this.itemsService.get('').subscribe((data: any) => {
      this.found=data.items
      console.log(this.found)
    });
  };
}
