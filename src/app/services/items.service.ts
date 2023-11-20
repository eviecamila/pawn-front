import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../model/item.model';

const apiUrl = environment.address;

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  uploadItem(data: any): Observable<any> {
    return this.http.post<any>(`${apiUrl}/items/tipos/new/`, data);
  }

    // Método para crear un nuevo elemento
    createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${apiUrl}/items/item/new/`, item);
  }
}
