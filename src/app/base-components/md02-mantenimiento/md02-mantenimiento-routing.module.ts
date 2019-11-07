import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccionComponent } from './accion/accion.component';
import { TipoMantenimientoComponent} from './tipo-mantenimiento/tipo-mantenimiento.component';
import { RegistrarMantenimientoComponent } from './registrar-mantenimiento/registrar-mantenimiento.component';
import { RevisionTecnicaComponent } from './revision-tecnica/revision-tecnica.component';




const routes: Routes = [
  {path: 'accion', component: AccionComponent},
  {path: 'tipo-mantenimiento', component: TipoMantenimientoComponent},
  {path: 'registrar-mantenimiento', component: RegistrarMantenimientoComponent},
  {path: 'revision-tecnica', component: RevisionTecnicaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Md02MantenimientoRoutingModule { }
