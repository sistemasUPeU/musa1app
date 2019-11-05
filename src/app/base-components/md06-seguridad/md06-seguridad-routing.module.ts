import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolComponent } from './rol/rol.component';
import { OpcionComponent } from './opcion/opcion.component';



const routes: Routes = [
  {path: 'usuario',component: UsuarioComponent },
  {path: 'rol',component: RolComponent },
  {path: 'opcion',component: OpcionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Md06SeguridadRoutingModule { }
