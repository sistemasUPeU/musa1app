import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Md02MantenimientoRoutingModule } from './md02-mantenimiento-routing.module';
import { AccionComponent } from './accion/accion.component';
import { TipoMantenimientoComponent } from './tipo-mantenimiento/tipo-mantenimiento.component';
import { RegistrarMantenimientoComponent } from './registrar-mantenimiento/registrar-mantenimiento.component';
import { TipoAccionComponent } from './tipo-accion/tipo-accion.component';
import { FormsModule } from '@angular/forms';
import { RevisionTecnicaComponent } from './revision-tecnica/revision-tecnica.component';
import { AutorizarPedidoComponent } from './autorizar-pedido/autorizar-pedido.component';


@NgModule({
  declarations: [
    AccionComponent,
    TipoAccionComponent, 
    TipoMantenimientoComponent, 
    RegistrarMantenimientoComponent, 
    RevisionTecnicaComponent,
    AutorizarPedidoComponent],
  imports: [
    CommonModule,
    Md02MantenimientoRoutingModule,
    FormsModule
  ]
})
export class Md02MantenimientoModule { }