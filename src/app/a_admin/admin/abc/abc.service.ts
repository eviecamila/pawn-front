import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.address;

@Injectable({
  providedIn: 'root'
})
export class AbcService {

  constructor(private http: HttpClient) { }

  buscar(url: string, param: string){
    return this.http.get(apiUrl+url+param)}
}
