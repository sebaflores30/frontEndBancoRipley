import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';
import { Historial } from 'src/app/shared/models/historial.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  cuenta: number = 123456;
  historial: Historial[] = [];
  constructor(
    private historialService: HistorialService
  ) { }

  ngOnInit(): void {
    this.cargaHistorial(this.cuenta);
  }

  cargaHistorial(cuenta: number) {
    this.historialService.getHitorial(cuenta).subscribe(res => {

      this.historial = res;
    }, error => {
      console.log(error);
    }
    )

  }

}
