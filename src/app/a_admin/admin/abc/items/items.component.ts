import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Output() data = new EventEmitter<any>();
  @Input() mode: any = 'add';
  forms:any={
    add:'agregando',
    edit:'modificando',
    delete:'borrando',
  }
  params:any={
    qr:true,
    info:true,
    add:true
  }
  ngOnInit(): void {
    this.data.emit({
      icon: 'gem',
      description: 'Inventario de pertenencias, para agregar y manejar los artículos disponibles.',
      type: 'Pertenencias',
      forms:this.forms,
      searchPlaceholder: 'Inserta el ID de la pertenencia'
    });
  }
}
