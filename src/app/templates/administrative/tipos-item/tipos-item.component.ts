import { Component } from '@angular/core';
import { PawnService } from 'src/app/services/pawn.service';
import items from 'src/assets/data/bs5_icons.json';
import { ToastrService } from 'ngx-toastr';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-tipos-item',
  templateUrl: './tipos-item.component.html',
  styleUrls: ['./tipos-item.component.css']
})
export class TiposItemComponent {
  icons!: any;
  tipoItem!: any;

  verboseName!: string;
  icon!: string;
  extension: File | null = null;  // Tipo File o null para representar cuando no se ha seleccionado ningún archivo
  descripcion!: string;
  tasaInteres!: string;

  constructor(
    public pawnService: PawnService,
    private toastr: ToastrService,
    private items: ItemsService,
  ) { }

  ngOnInit() {
    this.icons = items.items;
  }

  guardarItem(): void {
    if (!this.tipoItem) {
      this.toastr.error("No has podido pa");
      return;
    }

    const formData = new FormData();
    formData.append('nombre', this.tipoItem.replace(' ', '_'));
    formData.append('verboseName', !this.verboseName ? "no name" : this.verboseName);
    formData.append('icon', !this.icon ? "question-diamond-fill" : this.icon);

    if (this.extension) {
      console.log(this.extension.name.split('.'))
      const blob = new Blob([this.extension], { type: this.extension.type });

      // Verificar que 'name' no sea undefined antes de agregarlo a FormData
      const fileName = this.extension.name || 'archivo_sin_nombre';

      formData.append('extension', blob, fileName);
    }

    formData.append('descripcion', this.descripcion);
    formData.append('tasaInteres', this.tasaInteres);
    console.log(formData);
    this.items.uploadItem(formData).subscribe(
      (response) => {
        console.log('Archivo subido exitosamente:', response);
      },
      (error) => {
        console.error('Error al subir el archivo:', error);
      }
    );
  }

}
