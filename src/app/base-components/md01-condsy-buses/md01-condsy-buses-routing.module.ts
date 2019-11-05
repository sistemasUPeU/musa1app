import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequisitoComponent } from './requisito/requisito.component';


const routes: Routes = [
  {path: 'vinculacion', loadChildren: () => import('src/app/base-components/md01-condsy-buses/vinculacion/vinculacion.module').then(m => m.VinculacionModule)},
  {path: 'requisito', component: RequisitoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MD01CondsyBusesRoutingModule { }
