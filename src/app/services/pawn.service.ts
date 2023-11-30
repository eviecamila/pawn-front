import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const apiUrl = environment.address;
@Injectable({
  providedIn: 'root'
})
export class PawnService {
  constructor(private http: HttpClient) { }
  tiposItem() {return this.http.get(`${apiUrl}/items/tipos/list/`);}
  estadosItem() {return this.http.get(`${apiUrl}/items/estados/list/`);}
  tipoItem(name:string) {return this.http.get(`${apiUrl}/items/items?item=${name}`);}
  editTipoItem(name:string) {return this.http.get(`${apiUrl}/items/items?item=${name}`);}
  newTipoItem(name:string) {return this.http.get(`${apiUrl}/items/items?item=${name}`);}
  deleteTipoItem(name:string) {return this.http.get(`${apiUrl}/items/items?item=${name}`);}
  bs5Icons() {return this.http.get<any>("src/assets/data/bs5_icons.json")}
}
