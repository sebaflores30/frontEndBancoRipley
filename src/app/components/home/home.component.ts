import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/shared/models/login.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: Login = new Login();

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.cargaLogin();

  }

  cargaLogin() {
    this.loginService.getLogin().subscribe(res => {
      this.data = {
        nombre: res.nombre,
        rut: res.rut,
        correo: res.correo,
        telefono: res.telefono,
        no_cuenta: res.no_cuenta
      }
      console.log(this.data);
    }, error => {
      console.log(error);
    }
    )

  }

}
