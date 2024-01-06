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

  buscar(url: string, param: string, filtro = ""){
    if (filtro)
      url = apiUrl+url+param+(filtro?("&f="+filtro):'')
    else
      url= apiUrl+url+param
    return this.http.get(url)}
  buscarP(url: string, param: string, filtro = ""){
    if (filtro)
      url = apiUrl+url+param+(filtro?("&f="+filtro):'')
    else
      url= apiUrl+url+param
    return this.http.get(url)}
}
