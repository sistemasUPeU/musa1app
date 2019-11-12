import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Md06SeguridadRoutingModule } from './md06-seguridad-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolComponent } from './rol/rol.component';
import { OpcionComponent } from './opcion/opcion.component';

@NgModule({
  declarations: [UsuarioComponent, RolComponent, OpcionComponent],
  imports: [
    FormsModule,
    CommonModule,
    Md06SeguridadRoutingModule
  ]
})
export class Md06SeguridadModule { }
