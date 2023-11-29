import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const apiUrl = environment.address;
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  clientExists(data:any) {return this.http.post(`${apiUrl}/clients/verify_exist/`, data);}
  register(data:any) {return this.http.post(`${apiUrl}/clients/new/`, data);}
  get(curp:any) {return this.http.get(`${apiUrl}/clients?curp=${curp}`);}
}
