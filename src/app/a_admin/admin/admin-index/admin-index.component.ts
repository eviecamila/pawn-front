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
    href: "employee",
    children: [
      {
        icon: "person-add",
        name: "Agregar Empleado"
      },
      {
        icon: "person-down",
        name: "Dar de baja a Empleado"
      },
      {
        icon: "person-gear",
        name: "Modificar Empleado"
      }
    ],
    description: "Gestión de empleados, incluyendo agregar, dar de baja y modificar información del empleado.",
    form: `<form>
    <div class="mb-3">
      <label for="employeeName" class="form-label">Nombre del Empleado:</label>
      <input type="text" class="form-control" id="employeeName" required>
    </div>
    <div class="mb-3">
      <label for="employeeRole" class="form-label">Rol del Empleado:</label>
      <input type="text" class="form-control" id="employeeRole" required>
    </div>
    <!-- Agrega más campos según sea necesario -->
    <button type="submit" class="btn btn-primary">Guardar Empleado</button>
  </form>`
  },
  {
    icon: "person",
    name: "Clientes",
    href: "client",
    description: "Administración de clientes, permitiendo acceder y modificar sus datos.",
    form: `<form>
    <div class="mb-3">
      <label for="clientName" class="form-label">Nombre del Cliente:</label>
      <input type="text" class="form-control" id="clientName" required>
    </div>
    <div class="mb-3">
      <label for="clientContact" class="form-label">Contacto:</label>
      <input type="text" class="form-control" id="clientContact" required>
    </div>
    <!-- Agrega más campos según sea necesario -->
    <button type="submit" class="btn btn-primary">Guardar Cliente</button>
  </form>`
  },
  {
    icon: "gem",
    name: "Pertenencias",
    href: "items",
    description: "Inventario de pertenencias, para agregar y manejar los artículos disponibles.",
    form: `<form>
    <div class="mb-3">
      <label for="itemName" class="form-label">Nombre del Artículo:</label>
      <input type="text" class="form-control" id="itemName" required>
    </div>
    <div class="mb-3">
      <label for="itemValue" class="form-label">Valor Estimado:</label>
      <input type="number" class="form-control" id="itemValue" required>
    </div>
    <!-- Agrega más campos según sea necesario -->
    <button type="submit" class="btn btn-primary">Guardar Artículo</button>
  </form>`
  },
  {
    icon: "wallet2",
    name: "Ventas",
    href: "ventas",
    description: "Registro y seguimiento de ventas, incluyendo detalles de transacciones y registros financieros.",
    form: `<form>
    <div class="mb-3">
      <label for="saleItem" class="form-label">Artículo Vendido:</label>
      <input type="text" class="form-control" id="saleItem" required>
    </div>
    <div class="mb-3">
      <label for="saleAmount" class="form-label">Monto de la Venta:</label>
      <input type="number" class="form-control" id="saleAmount" required>
    </div>
    <!-- Agrega más campos según sea necesario -->
    <button type="submit" class="btn btn-primary">Registrar Venta</button>
  </form>`
  },
  {
    icon: "cash",
    name: "Empeños",
    href: "pawn",
    description: "Manejo de empeños, que incluye crear, actualizar y resolver contratos de empeño.",
    form: `<form><div>
    <div class="mb-3">
      <label class="form-label">Artículo en Empeño:</label>
      <input type="text" class="form-control" id="pawnItem" name="pawnItem" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Valor del Empeño:</label>
      <input type="number" class="form-control" id="pawnValue" name="pawnValue" required>
    </div>
    <button type="submit" class="btn btn-primary">Registrar Empeño</button>
  </div>
</form>`,
  }
]
