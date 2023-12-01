import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ItemsService } from 'src/app/services/items.service';
@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css'],
})
export class PendingQuotationsComponent implements OnInit{
  found:any=[]
  modo!:any
  constructor(
    private itemsService: ItemsService,
    private clientService: ClientService
  ) {
    this.itemsService.pending().subscribe((data: any) => {
      this.found=data.items
      console.log(this.found)
    });
  }
  ngOnInit(): void {
    
    console.log('pemne')
    
  }
}
