import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Md02MantenimientoRoutingModule } from './md02-mantenimiento-routing.module';
import { AccionComponent } from './accion/accion.component';

@NgModule({
  declarations: [AccionComponent],
  imports: [
    CommonModule,
    Md02MantenimientoRoutingModule
  ]
})
export class Md02MantenimientoModule { }
