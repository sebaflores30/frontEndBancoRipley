import { Component, OnInit } from '@angular/core';
import { DestinatarioService } from 'src/app/services/destinatario.service';
import { Destinatario } from 'src/app/shared/models/destinatario.model';
import { BancosService } from 'src/app/services/bancos.service';
import { Sweetalert2Service } from '../../services/alertSevice.service';


@Component({
  selector: 'app-destinatario',
  templateUrl: './destinatario.component.html',
  styleUrls: ['./destinatario.component.scss']
})
export class DestinatarioComponent implements OnInit {
  cuenta: number = 123456;
  destinatarios: Destinatario[] = [];
  destinatario = new Destinatario();
  banco: any;
  bancos: any;
  boton: boolean = false;
  constructor(
    private destinararioService: DestinatarioService,
    private bancoService: BancosService,
    private alerta: Sweetalert2Service

  ) { }

  ngOnInit(): void {
    this.cargaDestinatarios(this.cuenta);
    this.cargaBancos();
    this.destinatario.origen = this.cuenta;

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

  cargaBancos() {
    this.bancoService.getBancos().subscribe(res => {

      this.bancos = res.banks;
      console.log(this.bancos);
    }, error => {
      console.log(error);
    }
    )


  }

  validaNumericos(event: any) {
    if (event.charCode >= 48 && event.charCode <= 57) {
      return true;
    }
    return false;
  }



  creaDestinatario() {

    if (
      this.destinatario.banco == '' || null ||
      this.destinatario.correo == '' || null ||
      this.destinatario.cuenta == 0 || null ||
      this.destinatario.nombre == '' || null ||
      this.destinatario.origen == 0 || null ||
      this.destinatario.rut == '' || null ||
      this.destinatario.telefono == 0 || null ||
      this.destinatario.tpo_cuenta == '' || null) {
      console.log('hi');
      this.alerta.sweetErr('Datos', 'Faltan Datos');

    }
    else {
      if (this.validaExiste() == true) {
        this.alerta.sweetErr('Destinatario', 'El destinatario ya existe');

      }
      else {

        this.destinararioService.postDestinatario(this.destinatario);
        this.destinatarios.push(this.destinatario);

      }

    }
  }


  validaExiste() {

    const valDestinatario = this.destinatarios.find(cuenta => cuenta.cuenta === this.destinatario.cuenta);

    if (valDestinatario) {
      return true;

    }
    else {

      return false;
    }
  }

}




