import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { ReadPersonaComponent } from './read-persona/read-persona.component';
import { ServiceService } from 'src/app/base-services/service.service';
import {HttpClientModule} from '@angular/common/http';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { UpdatePersonaComponent } from './update-persona/update-persona.component';



@NgModule({
  declarations: [ReadPersonaComponent, AddPersonaComponent, UpdatePersonaComponent],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceService]
})
export class PersonaModule { }
