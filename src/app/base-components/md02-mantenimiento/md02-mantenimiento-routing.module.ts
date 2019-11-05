import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccionComponent } from './accion/accion.component';


const routes: Routes = [
  {path: 'accion', component: AccionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Md02MantenimientoRoutingModule { }
