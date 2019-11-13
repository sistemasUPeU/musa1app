import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { Md03CronoDespachoRoutingModule } from './md03-crono-despacho-routing.module';
import { GrupoComponent } from './grupo/grupo.component';
import { CsvComponent } from './csv/csv.component';
import { AsignarBusComponent } from './asignar-bus/asignar-bus.component';
import { AsignarConductorComponent } from './asignar-conductor/asignar-conductor.component';
import { ReportesComponent } from './reportes/reportes.component';

@NgModule({
  declarations: [GrupoComponent, CsvComponent, AsignarBusComponent, AsignarConductorComponent, ReportesComponent],
  imports: [
    FormsModule,
    CommonModule,
    Md03CronoDespachoRoutingModule
  ]
})
export class Md03CronoDespachoModule { }
