import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorialComponent } from './components/historial/historial.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { DestinatarioComponent } from './components/destinatario/destinatario.component';
import { MenuComponent } from './shared/sharedComponents/menu/menu.component';
import { HistorialService } from './services/historial.service';
import { HttpClientModule } from '@angular/Common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Sweetalert2Service } from './services/alertSevice.service';

@NgModule({
  declarations: [
    AppComponent,
    HistorialComponent,
    TransferenciaComponent,
    DestinatarioComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HistorialService, Sweetalert2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
