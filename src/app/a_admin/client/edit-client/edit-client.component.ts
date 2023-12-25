import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent {
  t = false;
  titulo = '';
  w = false;
  href = '/admin/client';
  searchText: string = '';
  output = '';
  @Output() form = new EventEmitter();
  constructor(
    private toastr: ToastrService,
    private clients: ClientService,
    private route: ActivatedRoute,) {
    this.route.queryParams.subscribe((p: any) => {
      this.t = p.t ? true : false;
      this.w = p.w ? true : false;
      this.client.curp = p.curp ? p.curp.toUpperCase() : ''
      if (this.t) {
        this.output = ', Redireccionando...'
      }
      this.titulo = this.w ? 'Registrate Ahora Mismo!' : 'Crear Nuevo Cliente';
      this.href = this.w ? '/web/pawn/quotations' : this.href
    })
  }
  onSearch() {
    console.log('Searching');
    console.log(this.searchText);

    if (this.searchText.length === 18) {
      this.clients.get(this.searchText).subscribe((data: any) => {
        // console.log(data);
        this.client = data["clientes"][0];
        this.client.exists = true;
        // console.log(data["clientes"][0]);
      });
    }
  }
  onCancel() {
    this.client = {
      nombre: '',
      direccion: '',
      curp: '',
      email: '',
      phone: '',
      exists: false,
    }
    this.searchText = '';
  }

  client: any = {
    nombre: '',
    direccion: '',
    curp: '',
    email: '',
    phone: '',
    exists: false,
  }
  ngOnInit(): void {

  }
  onValidate(): boolean {
    return (this.client.nombre.length > 3
      && this.client.direccion.length > 3
      && this.client.curp.length === 18
      && this.client.email.includes('@')
      && this.client.phone.length === 10)
  }
  editClient() {
    console.log(this.client);
    if (this.onValidate()) {
      this.clients.edit(this.client).subscribe((data: any) => {
        if (data.status === 'OK') {
          this.toastr.success(data.message + this.output)

        }
        else this.toastr.error(data.message)
      })
      setTimeout(() => {
        location.reload()
      }, 3000);
    }
  }
}
