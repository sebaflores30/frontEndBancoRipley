import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
//import { Destinatario } from '../shared/models/destinatario.model';
import { HttpClient, HttpHeaders } from '@angular/Common/http';
import { Sweetalert2Service } from "./alertSevice.service";

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService {
  private urlApi: string = environment.urlApi;
  private destinatarioApi: string = environment.destinatarioApi;
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
  constructor(private http: HttpClient, private sweet: Sweetalert2Service) { }

  getDestinatario(cuenta: number) {
    return this.http.get<any>(`${this.urlApi}${this.destinatarioApi}/${cuenta}`);

  }

  postDestinatario(body: any) {


    return this.http.post<any>(`${this.urlApi}${this.destinatarioApi}`, body, this.httpOptions)
      .subscribe(res => {
        if (res.status === 200) {
          this.sweet.sweetOK('OK', 'Destinatario Creado')

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

