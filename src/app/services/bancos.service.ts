import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/Common/http';

@Injectable({
  providedIn: 'root'
})
export class BancosService {
  private urlApi: string = environment.bancosApi;
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
  constructor(
    private http: HttpClient) { } 
  
    getBancos() {
      return this.http.get<any>(`${this.urlApi}`);
  
  }
}
