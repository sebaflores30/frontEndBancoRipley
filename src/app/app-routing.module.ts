import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinatarioComponent } from './components/destinatario/destinatario.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'destinarios', component: DestinatarioComponent},
  {path: 'transferencia', component: TransferenciaComponent},
  {path: 'historial', component: HistorialComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
