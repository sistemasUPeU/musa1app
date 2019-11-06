import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Md02MantenimientoRoutingModule } from './md02-mantenimiento-routing.module';
import { AccionComponent } from './accion/accion.component';
import { TipoMantenimientoComponent } from './tipo-mantenimiento/tipo-mantenimiento.component';
import { RegistrarMantenimientoComponent } from './registrar-mantenimiento/registrar-mantenimiento.component';

@NgModule({
  declarations: [AccionComponent, TipoMantenimientoComponent, RegistrarMantenimientoComponent],
  imports: [
    CommonModule,
    Md02MantenimientoRoutingModule
  ]
})
export class Md02MantenimientoModule { }
