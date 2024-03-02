import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const apiURL = environment
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiURL: string = `${environment.address}/rrhh/`;

  // Editar datos de empleado
  edit(data:any){return this.http.post(`${this.apiURL}employee/edit/`, data);}
  create(data:any){return this.http.post(`${this.apiURL}employee/new/`, data);}

  constructor(private http: HttpClient) { }
}
