import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/Common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlApi: string = environment.urlApi;
  private loginApi: string = environment.loginApi;
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
  constructor(
    private http: HttpClient) { }

  getLogin() {
    return this.http.get<any>(`${this.urlApi}${this.loginApi}`);

  }
}