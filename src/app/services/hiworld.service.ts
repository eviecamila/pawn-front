import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const apiUrl = environment.address;
@Injectable({
  providedIn: 'root'
})
export class HiworldService {

  constructor(private http:HttpClient) { }
  wasa(){
    return this.http.get(`${apiUrl}/clients/hi`)
  }
}
