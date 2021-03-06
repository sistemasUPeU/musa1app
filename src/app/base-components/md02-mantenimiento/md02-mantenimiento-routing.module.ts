import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccionComponent } from './accion/accion.component';
import { TipoMantenimientoComponent} from './tipo-mantenimiento/tipo-mantenimiento.component';
import { RegistrarMantenimientoComponent } from './registrar-mantenimiento/registrar-mantenimiento.component';
import { RevisionTecnicaComponent } from './revision-tecnica/revision-tecnica.component';
import { AutorizarPedidoComponent } from './autorizar-pedido/autorizar-pedido.component';
import { TipoAccionComponent } from './tipo-accion/tipo-accion.component';
import { PedidoComponent } from './pedido/pedido.component';
import { SegundaValidacionComponent } from './segunda-validacion/segunda-validacion.component';
import { ValidarJefeMantenimientoComponent } from "./validar-jefe-mantenimiento/validar-jefe-mantenimiento.component";




const routes: Routes = [
  {path: 'accion', component: AccionComponent},
  {path: 'tipo-mantenimiento', component: TipoMantenimientoComponent},
  {path: 'registrar-mantenimiento', component: RegistrarMantenimientoComponent},
  {path: 'revision-tecnica', component: RevisionTecnicaComponent},
  {path:  'autorizar-pedido', component: AutorizarPedidoComponent},
  {path:  'tipo-accion',component: TipoAccionComponent},
  {path: 'pedido', component: PedidoComponent},
  {path: 'segunda-validacion',component: SegundaValidacionComponent},
  {path:  'validar-jefe-mantenimiento',component:ValidarJefeMantenimientoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Md02MantenimientoRoutingModule { }
