import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../model/item.model';
import { NuevoTipoItem } from '../model/item.model';

const apiUrl = environment.address+"/items/";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  uploadItem(data: any): Observable<any> {
    return this.http.post<any>(`${apiUrl}tipos/new/`, data);
  }

  // Método para crear un nuevo elemento
  createItem(item: Item): Observable<any> {
    return this.http.post<Item>(`${apiUrl}item/new/`, item);
  }
  editItem(item: any): Observable<any> {
    return this.http.post<Item>(`${apiUrl}item/edit/`, item);
  }
  pawn(item: any): Observable<any> {
    return this.http.post<Item>(`${apiUrl}articulo/pawn/`, item);
  }
  message(data: any){
    return this.http.post<Item>(`${apiUrl}message/`, data);
  }
  reject(data: any){
    return this.http.post<Item>(`${apiUrl}articulo/rechazar/`, data);
  }
  get(item?: string) { return this.http.get(`${apiUrl}?id=${item}`); }
  all() { return this.get(''); }
  pay(item:any) { return this.http.post(`${apiUrl}articulo/pay/`,item); }
  pending() { return this.get('&p=1'); }

  // When moros en la costa

  // Método para obtener todos los elementos
  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${apiUrl}item/list`);
  }

  // Método para obtener la lista de estados
  getAllEstados(): Observable<any[]> {
    return this.http.get<any[]>(`${apiUrl}estados/list`);
  }

  // Método para obtener la lista de tipos
  getAllTipos(): Observable<any[]> {
    return this.http.get<any[]>(`${apiUrl}tipos/list`);
  }

  // Método para buscar un tipo exacto
  buscarTipoExacto(tipo: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${apiUrl}items?item=${tipo}`);
  }

  // Método para liquidar un artículo
  // liquidarItem(item: Item): Observable<any> {
  //   return this.http.post<any>(`${apiUrl}articulo/liquidar/`, item);
  // }

  // Método para liquidar un artículo por su ID
  liquidarItemPorId(id: string): Observable<any> {
    const body = { id: id }; // Crear el cuerpo de la solicitud con el ID
    return this.http.post<any>(`${apiUrl}articulo/liquidar/`, body);
  }

  // Método para agregar un nuevo estado de item
  agregarNuevoEstado(nombreEstado: string): Observable<any> {
    const body = { nombre: nombreEstado }; // Cuerpo de la solicitud con el nombre del estado
    return this.http.post<any>(`${apiUrl}estados/new/`, body);
  }

  // Método para agregar un nuevo tipo de item
  agregarNuevoTipo(nuevoTipo: NuevoTipoItem): Observable<any> {
    return this.http.post<any>(`${apiUrl}tipos/new/`, nuevoTipo);
  }

  // Método para buscar un tipo de ítem por nombre
  buscarTipoDeItem(nombre: string): Observable<any> {
    const body = { name: nombre }; // Cuerpo de la solicitud con el nombre del tipo a buscar
    return this.http.post<any>(`${apiUrl}tipos/search/`, body);
  }

  // Método para buscar un estado de ítem por nombre
  buscarEstadoDeItem(nombre: string): Observable<any> {
    const body = { name: nombre }; // Cuerpo de la solicitud con el nombre del estado a buscar

    return this.http.post<any>(`${apiUrl}estados/search/`, body);
  }
}
