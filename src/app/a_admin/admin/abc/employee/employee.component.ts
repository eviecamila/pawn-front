import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Output() data = new EventEmitter<any>();
  @Input() mode: any = 'add';
  forms:any={
    add:'agregando',
    edit:'modificando',
    delete:'borrando',
  }
  ngOnInit(): void {
    this.data.emit({
      icon: 'headset',
      description: 'Gestión de empleados, incluyendo agregar, dar de baja y modificar información del empleado.',
      type: 'Empleados',
      forms:this.forms,
      searchPlaceholder: 'RFC: PPLU020222HD3'
    });
  }
}
