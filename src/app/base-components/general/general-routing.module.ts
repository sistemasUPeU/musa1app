import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { EmpresaComponent } from './empresa/empresa.component';


const routes: Routes = [
  {path: 'persona', component: PersonaComponent},
  {path: 'empresa', component: EmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
