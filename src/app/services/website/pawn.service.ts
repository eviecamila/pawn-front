import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const apiUrl = 'http://localhost:8000';
@Injectable({
  providedIn: 'root'
})
export class PawnService {
  constructor(private http: HttpClient) { }

  tiposItem() {return this.http.get(`${apiUrl}/items/tipos/list`);}

}
