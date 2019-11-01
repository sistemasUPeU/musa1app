import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { ReadPersonaComponent } from './read-persona/read-persona.component';
import { ServiceService } from 'src/app/base-services/service.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [ReadPersonaComponent],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceService]
})
export class PersonaModule { }
