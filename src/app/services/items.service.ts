import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const apiUrl = environment.address;

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  uploadItem(data: any): Observable<any> {
    return this.http.post<any>(`${apiUrl}/items/tipos/new/`, data);
  }
}
