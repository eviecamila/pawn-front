import { Component } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent {
  constructor(
    public screen: ScreenService,
  ) { }
  getIcons() { return indexAbcs }

};
export const indexAbcs = [
  {
    icon: "headset",
    name: "Empleados",
    href: "admin/abc/employee",
    description: "Gestión de empleados, incluyendo agregar, dar de baja y modificar información del empleado.",
  },
  {
    icon: "person",
    name: "Clientes",
    href: "admin/abc/client",
    description: "Administración de clientes, permitiendo acceder y modificar sus datos.",
  },
  {
    icon: "gem",
    name: "Pertenencias",
    href: "admin/abc/items",
    description: "Inventario de pertenencias, para agregar y manejar los artículos disponibles.",
  },
  {
    icon: "cash-coin",
    name: "Cotizaciones",
    href: "admin/quotations",
    description: "Inventario de pertenencias, para agregar y manejar los artículos disponibles.",
  },
  {
    icon: "wallet2",
    name: "Ventas",
    href: "admin/abc/sellings",
    description: "Registro y seguimiento de ventas, incluyendo detalles de transacciones y registros financieros.",
  },
  {
    icon: "cash",
    name: "Empeños",
    href: "admin/abc/pawn",
    description: "Manejo de empeños, que incluye crear, actualizar y resolver contratos de empeño.",
  },
  {
    icon: "bar-chart",
    name: "Inversiones",
    href: "admin/abc/invest",
    description: "Manejo de inversiones",
  }
]
