import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  @Output() form = new EventEmitter();
  constructor(
    private toastr: ToastrService,
    private clients: ClientService) {

  }
  newClient: any = {
    nombre: '',
    direccion: '',
    curp: '',
    email: '',
    telefono: '',
  }
  ngOnInit(): void {

  }
  onValidate(): boolean {
    return (this.newClient.nombre.length > 3
      && this.newClient.direccion.length > 3
      && this.newClient.curp.length === 18
      && this.newClient.email.includes('@')
      && this.newClient.telefono.length === 10)
  }
  async createNewClient() {
    if (this.onValidate()) {
      await this.clients.register(this.newClient).subscribe((data: any) => {
        if (data.status === 'OK') this.toastr.success(data.message)
        else this.toastr.error(data.message)
      })
      setTimeout(() => {
        location.reload()
      }, 3000);
    }
  }
  /**
   * createNewItem(): void {
    const item = this.newItem
    let valid = this.onSearch()
    if (this.cliente) {
      if (this.image) item.imagen = this.image
      console.log(item)
      valid = true;
    }
    if (valid) {
      this.itemService.createItem(this.newItem)
        .subscribe((Response: any) => {
          if (Response.status === 'OK') {
            this.toastr.success(Response.message);
          }
          else {
            this.toastr.error(Response.message);
          }
          setTimeout(() => { location.reload() }, 2000)
        });
    }



  }
  */
}
