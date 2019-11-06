import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoComponent } from './grupo/grupo.component';
import { CsvComponent } from './csv/csv.component';


const routes: Routes = [
  {path: 'grupo', component: GrupoComponent },
  {path: 'csv', component: CsvComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Md03CronoDespachoRoutingModule { }
