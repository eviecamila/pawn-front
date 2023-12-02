import { Component, EventEmitter, Output, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { PawnService } from 'src/app/services/pawn.service';
import { pawnItem } from 'src/app/model/item.model';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html'
})
export class EditItemComponent implements OnInit, OnChanges {
  @Output() form = new EventEmitter<any>();
  @Input() input!: any;
  @Input() id!: any;
  @Input() q: any = true;
  dias = [30, 90, 180, 360];
  _item!: any;
  tipos!: any;
  estados!: any;
  item: pawnItem = {
    id: '',
    cliente: '',
    articulo: '', // Changed from 'item' to 'articulo' to match your template
    estado: '',
    caracteristicas: '',
    observaciones: ',',
    dias: 32, // Keep this if it's being used
    borrarImagen: false,

    // Add the missing properties
    fecha_ingreso: '',
    fecha_retiro: '',
    fecha_limite: ',',
    cotizacion: 32 // Assuming this is a number
  }
  image!: any;
  cliente!: any;
  items: any;

  constructor(
    private itemService: ItemsService,
    private clientService: ClientService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private pawn: PawnService,
    public darkModeService: DarkModeService
  ) { }
  ngOnInit(): void {
    console.log(this.q ? this.q : "No hay Q")
    console.log(this.id ? this.id : "No hay ID")

    if (this.q) {
      console.log('Hay Q')
      if (!this.id) {
        console.log('Hay ID')
        this.route.queryParams.subscribe((params: any) => {
          try {
            if (params.id) {
              this.itemService.get(params.id).subscribe((data: any) => {
                this._item = data.items[0];
                this.image = this._item.imagen;
                // console.log(this._item)
              })
            }
            else {
              location.href = '/admin/'
            }
          } catch (err) {


          }
        });
      } else {
        console.log('Hay Q pero no ID')
        this.itemService.get(this.id).subscribe((data: any) => {
          this._item = data.items[0];
          this.image = this._item.imagen;
          // console.log(this._item)
        })
      }
    }
    this.pawn.tiposItem().subscribe((items: any) => {
      this.tipos = items['tipos_item'];
      // console.log(this.tipos)

    })
    this.pawn.estadosItem().subscribe((items: any) => {
      this.estados = items.items;
      // console.log(this.tipos)

    })

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && this.id) {
      this.itemService.get(this.id).subscribe((data: any) => {
        this._item = data.items[0];
        this.image = this._item.imagen;
        this._item.fecha_ingreso = this.formatDate(this._item.fecha_ingreso);
        this._item.fecha_retiro = this.formatDate(this._item.fecha_retiro);
        this._item.fecha_limite = this.formatDate(this._item.fecha_limite);
      })
    }
  }
  buscarEstado = (id: any) => this.estados.find((item: any) => item.id === id)
  onChange(event: Event) {
    console.log(this.estados)
    const target = event.target as HTMLSelectElement;
    if (target) {
      const estado = this.buscarEstado(parseInt(target.value));
      this._item.id_estado = estado.id;
      this._item.estado = estado.estado
    }
  }

  formatDate(date: string): string {
    if (!date) return '';

    let d = new Date(date);
    let year = d.getFullYear();
    let month = ('0' + (d.getMonth() + 1)).slice(-2); // Meses son de 0-11
    let day = ('0' + d.getDate()).slice(-2);
    let hour = ('0' + d.getHours()).slice(-2);
    let minute = ('0' + d.getMinutes()).slice(-2);

    return `${year}-${month}-${day}T${hour}:${minute}`;
  }
  updateItem(): void {
    console.log(this._item);

    // if (this.cliente) {
    //   if (this.image) this.editItem.imagen = this.image;
    //   console.log(this.editItem);
    //   this.itemService.editItem(this.editItem) // Asegúrate de que este método exista y esté implementado correctamente
    //     .subscribe((response: any) => {
    //       // Manejo de la respuesta
    //       if (response.status === 'OK') {
    //         this.toastr.success('Artículo actualizado con éxito.');
    //         this.form.emit({ status: 'OK', data: this.editItem });
    //       } else {
    //         this.toastr.error('Error al actualizar el artículo.');
    //         this.form.emit({ status: 'Error' });
    //       }
    //     });
    // } else {
    //   this.toastr.error("Debe seleccionar un cliente válido.");
    // }
  }

  onSearch() {
    // Implementar lógica de búsqueda
  }

  onClear() {
    this.image = null;
    let input = document.getElementById('itemPhoto') as HTMLInputElement;
    if (input) {
      input.value = ''; // Esto borrará el texto en el input de archivo
    }
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      // Aquí puedes manejar el archivo, por ejemplo, leerlo o prepararlo para subir
      // Por ejemplo, para leer el archivo como un DataURL (útil para previsualizar la imagen):
      const reader = new FileReader(); reader.readAsDataURL(file);
      reader.onload = () => {
        // console.log(reader.result as string);  // Aquí tienes el DataURL del archivo
        this.image = reader.result as string // Aquí tienes el DataURL del archivo
        // Puedes asignar esto a una variable si deseas mostrar la imagen en tu plantilla
      };

      // Si necesitas subir el archivo a un servidor, aquí iría esa lógica
    }
  }

  // Puedes incluir otros métodos según sea necesario
}
