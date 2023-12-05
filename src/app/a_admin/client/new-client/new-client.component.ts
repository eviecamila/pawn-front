import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  t = false;
  titulo = '';
  w = false;
  href = '/admin/newclient';
  output = ''
  @Output() form = new EventEmitter();
  constructor(
    private toastr: ToastrService,
    private clients: ClientService,
    private route: ActivatedRoute,) {
    this.route.queryParams.subscribe((p: any) => {
      this.t = p.t ? true : false;
      this.w = p.w ? true : false;
      this.newClient.curp = p.curp?p.curp.toUpperCase():''
      if (this.t) {
        this.output = ', Redireccionando...'
      }
      this.titulo = this.w?'Registrate Ahora Mismo!':'Crear Nuevo Cliente';
      this.href = this.w ? '/web/pawn/quotations':this.href
    })

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
        if (data.status === 'OK')
        {
           this.toastr.success(data.message + this.output)
           if (this.w)this.href+='?curp=' + this.newClient.curp
          }
        else this.toastr.error(data.message)
      })
      setTimeout(() => {
        location.href = this.href
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
