import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinculacionConductorComponent } from './vinculacion-conductor/vinculacion-conductor.component';
import { VinculacionModule } from './vinculacion.module';
import { VinculacionBusComponent } from './vinculacion-bus/vinculacion-bus.component';


const routes: Routes = [
  {path:'conductor' , component: VinculacionConductorComponent},
  {path:'bus', component: VinculacionBusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VinculacionRoutingModule { }
