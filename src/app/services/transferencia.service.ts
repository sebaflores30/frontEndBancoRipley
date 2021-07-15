import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/Common/http';
import { Sweetalert2Service } from "./alertSevice.service";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private urlApi: string = environment.urlApi;
  private transferencialApi: string = environment.transferencia;
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

  constructor(
    private http: HttpClient,
    private sweet: Sweetalert2Service
  ) { }

  postTransferenc(body: any) {
    return this.http.post<any>(`${this.urlApi}${this.transferencialApi}`, body, this.httpOptions)
      .subscribe(res => {
        if (res.status === 200) {
          this.sweet.sweetOK('OK', 'Transferencia Realizada con exito')

        }
        else {
          this.sweet.sweetErr('Error', 'Error al guardar los datos')
        }
      },
        err => {
          this.sweet.sweetErr('Error', 'Error al guardar los datos');
          console.log(err);
        })
  }
}

