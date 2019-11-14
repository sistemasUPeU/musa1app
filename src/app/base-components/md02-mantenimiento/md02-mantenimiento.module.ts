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
import { PedidoComponent } from './pedido/pedido.component';
import { RevisiondetalleComponent } from './revisiondetalle/revisiondetalle.component';
import { SegundaValidacionComponent } from './segunda-validacion/segunda-validacion.component';
import { ValidarJefeMantenimientoComponent } from './validar-jefe-mantenimiento/validar-jefe-mantenimiento.component'



@NgModule({
  declarations: [
    AccionComponent,
    TipoAccionComponent, 
    TipoMantenimientoComponent, 
    RegistrarMantenimientoComponent, 
    RevisionTecnicaComponent,
    AutorizarPedidoComponent,
    PedidoComponent,
    RevisiondetalleComponent,
    SegundaValidacionComponent,
    ValidarJefeMantenimientoComponent],
  imports: [
    CommonModule,
    Md02MantenimientoRoutingModule,
    FormsModule
  ]
})
export class Md02MantenimientoModule { }