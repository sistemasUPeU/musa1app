import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoComponent } from './grupo/grupo.component';
import { CsvComponent } from './csv/csv.component';
import { AsignarBusComponent } from './asignar-bus/asignar-bus.component';
import { AsignarConductorComponent } from './asignar-conductor/asignar-conductor.component';
import {ReportesComponent} from './reportes/reportes.component';


const routes: Routes = [
  {path: 'grupo', component: GrupoComponent },
  {path: 'csv', component: CsvComponent},
  {path: 'asignar-bus', component: AsignarBusComponent},
  {path: 'asignar-conductor', component: AsignarConductorComponent},
  {path: 'generar-reportes', component: ReportesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Md03CronoDespachoRoutingModule { }
