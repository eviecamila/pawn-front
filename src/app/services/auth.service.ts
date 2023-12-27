import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
const apiURL = environment
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = `${environment.address}/auth/`;
  userToken: string | null = '';
  refToken: string | null = '';

  constructor(private http: HttpClient) { }


  validarToken(email: string, token: string) {
    return this.http.get(`${this.apiURL}validate_token/${email}/${token}`);
  }
  verToken(email: string) {
    return this.http.get(`${this.apiURL}check_token/${email}`);
  }
  currentUser(token: string | null) {
    return this.http.get(`${this.apiURL}users/current?token=${token}`);
  }

  //AUN SIN FUNCIONAMIENTO EN EL BACK
  resetPassword(uid: Number, token: String, data: any) {
    return this.http.post(
      `${this.apiURL}reset_password/${uid}/${token}/`,
      data
    );
  }

  //AUN SIN FUNCIONAMIENTO EN EL BACK
  recoveryPassword(data: any) {
    return this.http.post(`${this.apiURL}password/recovery/`, data);
  }

  changePassword(data: any) {
    return this.http.post(`${this.apiURL}changepassword/`, data);
  }
  changePasswordToken(data: any) {
    return this.http.post(`${this.apiURL}password/change/token/`, data);
  }

  //Este metodo hace el refresh del Token, se usa
  //para actualizar el estado del token en turno.
  refreshToken() {
    let refresh_token: Object = { refresh_token: this.refToken };
    return this.http.post(`${this.apiURL}token/refresh/`, refresh_token).pipe(
      map((res) => {
        return res;
      })
    );
  }

  //Este metodo sirve para guardar el token en turno
  private saveTokens(data: any) {
    this.userToken = data['access_token'];
    this.refToken = data['refresh_token'];
    let expire = new Date();
    expire.setSeconds(Number(data['expires_in']));

    localStorage.setItem('token', String(this.userToken));
    localStorage.setItem('refresh_token', String(this.refToken));
    localStorage.setItem('expire', expire.getTime().toString());
  }

  //Este metodo sirve para hacer el inicio de sesion,
  //guarda el token que se esta utlizando mientras la sesion
  //este abierta.
  login(user: any) {
    return this.http.post(`${this.apiURL}login/`, user).pipe(
      map((res: any) => {
        if (res['access_token']) {
          this.saveTokens(res);
        }
        return res;
      })
    );
  }

  //Este metodo hace el cierre de sesion, al finalizar la sesion
  //se limpia el estado del token
  logout() {
    let token: Object = { token: this.readToken() };
    return this.http.post(`${this.apiURL}logout/`, token).pipe(
      map((res) => {
        this.clearToken();
        return res;
      })
    );
  }

  //Este otro metodo lee el token para saber que usuario
  //esta iniciando sesion
  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
      this.refToken = localStorage.getItem('refresh_token');
    } else {
      this.userToken = '';
      this.refToken = '';
    }
    return String(this.userToken);
  }

  //Este metodo es el que hace la autentificacion de los token,
  isAuth(): boolean {
    this.readToken();
    if ((this.userToken as String).length < 15) {
      this.clearToken();
      return false;
    }
    const expire = Number(localStorage.getItem('expire'));
    const expireDate = new Date();
    expireDate.setTime(expire);
    if (expireDate > new Date()) {
      this.refreshToken();
      return true;
    } else {
      return false;
    }
  }

  //elimina los datos del token
  clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expire');
    this.userToken = '';
    this.refToken = '';
  }
}
