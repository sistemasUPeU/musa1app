import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadPersonaComponent } from './read-persona/read-persona.component';


const routes: Routes = [
  {
    path: '', component: ReadPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
