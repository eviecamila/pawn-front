import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.css'],
})
export class PawnComponent implements OnInit {
  @Output() data = new EventEmitter<any>();
  @Input() mode: any = 'add';
  forms: any = {
    add: 'agregando',
    edit: 'modificando',
    delete: 'borrando',
  };
  params: any = {
    qr: true,
    info: true,
    add: true,
  };
  ngOnInit(): void {
    this.data.emit({
      icon: 'cash',
      description:
        'Manejo de empeños, que incluye crear, actualizar y resolver contratos de empeño.',
      type: 'Empeños',
      forms: this.forms,
      searchPlaceholder: 'Inserta el ID del empeño',
    });
  }
}
