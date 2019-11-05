import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Md06SeguridadRoutingModule } from './md06-seguridad-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolComponent } from './rol/rol.component';
import { OpcionComponent } from './opcion/opcion.component';

@NgModule({
  declarations: [UsuarioComponent, RolComponent, OpcionComponent],
  imports: [
    CommonModule,
    Md06SeguridadRoutingModule
  ]
})
export class Md06SeguridadModule { }
