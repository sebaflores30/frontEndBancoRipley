import { Component, OnInit } from '@angular/core';
import { DestinatarioService } from 'src/app/services/destinatario.service';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Transferencia } from 'src/app/shared/models/transferencia.model';
import { Destinatario } from 'src/app/shared/models/destinatario.model';
import { Sweetalert2Service } from '../../services/alertSevice.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {
  cuenta: number = 123456;
  transferencias: Transferencia[] = [];
  destinatarios: Destinatario[] = [];
  transferencia = new Transferencia();
  destinatario = new Destinatario();
  cuentaSeleccionada: any;
  dataDestiantario: any;

  constructor(
    private readonly destinararioService: DestinatarioService,
    private transferenciaService: TransferenciaService,
    private alerta: Sweetalert2Service
  ) { }

  ngOnInit(): void {
    this.cargaDestinatarios(this.cuenta);
  }

  cargaDestinatarios(cuenta: number) {
    this.destinararioService.getDestinatario(cuenta).subscribe(res => {

      this.destinatarios = res;
      console.log(this.destinatarios);
    }, error => {
      console.log(error);
    }
    )
  }

  buscaDestinatario(cuenta: any) {

    this.dataDestiantario = this.destinatarios.find(x => x.cuenta == cuenta);
    this.destinatario = this.dataDestiantario;

    console.log(this.dataDestiantario);
  }

  async creaTransferencia() {
    if (this.transferencia.monto == 0) {
      this.alerta.sweetErr('Error', 'El monto debe ser mayor a 0');
    }
    else {
      await this.metodoPrueba();
      this.insertaTransferencia();
    }
  }

  insertaTransferencia() {

    this.transferenciaService.postTransferenc(this.transferencia);
  }

  async metodoPrueba() {
    await new Promise((resolve, reject) => {

      this.transferencia.banco = this.destinatario.banco;
      this.transferencia.origen = this.destinatario.origen;
      this.transferencia.cuenta = this.destinatario.cuenta.toString();
      this.transferencia.fecha = new Date().toString();
      this.transferencia.nro_transaccion = 11;
      this.transferencia.rut = this.destinatario.rut;
      this.transferencia.tpo_cuenta = this.destinatario.tpo_cuenta;
      this.transferencia.nom_dest = this.destinatario.nombre;
      this.transferencia.comentario = 'prueba';
      resolve(console.log('se llenó'));
    })

  }

}
