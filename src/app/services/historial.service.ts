import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/Common/http';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private urlApi: string = environment.urlApi;
  private historialApi: string = environment.historialApi;
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
  constructor(
    private http: HttpClient) { }

  getHitorial(cuenta: number) {
    return this.http.get<any>(`${this.urlApi}${this.historialApi}/${cuenta}`);

  }
}
