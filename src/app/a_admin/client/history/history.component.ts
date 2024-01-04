import { Component, Input, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() id!: number;
  name!:string;ready = false
  found = [];
  constructor(
    private client: ClientService,
    private toastr:ToastrService
  ) { }
  ngOnInit(): void {
    if (this.id) {
      this.client.history(this.id).subscribe((data: any) => {
        if (!data.client)
          {this.toastr.warning("No se ha encontrado un cliente")}
        this.name = data.client
        if (data.items.length===0)
          {
            this.toastr.warning("No se ha encontrado ningun articulo para "+data.client)}
        this.found = data.items
      });
      this.ready = true
    }
  }

}
