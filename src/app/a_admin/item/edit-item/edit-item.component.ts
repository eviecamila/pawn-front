import { Component, EventEmitter, Output } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { pawnItem } from 'src/app/model/item.model';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html'
})
export class EditItemComponent {
  @Output() form = new EventEmitter<any>();
  dias = [30, 90, 180, 360];
  editItem: pawnItem = {
    id: '',
    cliente: '',
    item: '',
    estado: '',
    caracteristicas: '',
    observaciones: '',
    cotizacionAutorizada: null,
    dias: null,
    borrarImagen: false
  };
  image!: any;
  cliente!: any;
  items: any;

  constructor(
    private itemService: ItemsService,
    private clientService: ClientService,
    private toastr: ToastrService,
    public darkModeService: DarkModeService
  ) {
    // Obtener los tipos de artículos
  }

  updateItem(): void {
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
