import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  @Output() data = new EventEmitter<any>();
  @Input() mode: any = 'add';
  forms:any={
    add:'agregando',
    edit:'modificando',
    delete:'borrando',
  }
  ngOnInit(): void {
    this.data.emit({
      icon: 'person',
      description: 'Administración de clientes, permitiendo acceder y modificar sus datos.',
      type: 'Clientes',
      forms:this.forms,
      searchPlaceholder: 'CURP: PPLU020222MSLLLPA5'
    });
    console.log('jalando');
  }
}
