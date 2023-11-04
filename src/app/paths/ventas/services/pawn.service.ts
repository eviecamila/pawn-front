import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const apiUrl = environment.address;
@Injectable({
  providedIn: 'root'
})
export class PawnService {
  constructor(private http: HttpClient) { }

  tiposItem() {return this.http.get(`${apiUrl}/items/tipos/list`);}

}
