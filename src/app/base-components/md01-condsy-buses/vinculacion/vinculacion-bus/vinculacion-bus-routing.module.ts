import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinculacionBusComponent } from './vinculacion-bus.component';

const routes: Routes = [
  {path:'', component: VinculacionBusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VinculacionBusRoutingModule { }
