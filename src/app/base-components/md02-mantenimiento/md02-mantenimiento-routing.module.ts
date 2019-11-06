import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccionComponent } from './accion/accion.component';
import { TipoMantenimientoComponent} from './tipo-mantenimiento/tipo-mantenimiento.component';



const routes: Routes = [
  {path: 'accion', component: AccionComponent},
  {path: 'tipo-mantenimiento', component: TipoMantenimientoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Md02MantenimientoRoutingModule { }
