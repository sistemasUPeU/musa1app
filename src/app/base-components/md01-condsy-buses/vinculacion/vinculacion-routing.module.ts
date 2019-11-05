import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinculacionConductorComponent } from './vinculacion-conductor/vinculacion-conductor.component';


const routes: Routes = [
  {path:'conductor' , component: VinculacionConductorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VinculacionRoutingModule { }
