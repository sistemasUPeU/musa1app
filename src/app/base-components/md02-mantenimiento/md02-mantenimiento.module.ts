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
<<<<<<< HEAD
import { ValidarJefeMantenimientoComponent } from './validar-jefe-mantenimiento/validar-jefe-mantenimiento.component';
=======
import { SegundaValidacionComponent } from './segunda-validacion/segunda-validacion.component';
>>>>>>> 35d6f1bfe43b3aab88d4801227201b07bd9c9779



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
<<<<<<< HEAD
    ValidarJefeMantenimientoComponent],
=======
    SegundaValidacionComponent],
>>>>>>> 35d6f1bfe43b3aab88d4801227201b07bd9c9779
  imports: [
    CommonModule,
    Md02MantenimientoRoutingModule,
    FormsModule
  ]
})
export class Md02MantenimientoModule { }