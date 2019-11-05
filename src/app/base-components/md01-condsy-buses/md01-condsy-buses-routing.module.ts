import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequisitoComponent } from './requisito/requisito.component';
import { BusesComponent } from './buses/buses.component';



const routes: Routes = [
  {path: 'vinculacion', loadChildren: () => import('src/app/base-components/md01-condsy-buses/vinculacion/vinculacion.module').then(m => m.VinculacionModule)},
  {path: 'requisito', component: RequisitoComponent},
  {path: 'buses' , component: BusesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MD01CondsyBusesRoutingModule { }
