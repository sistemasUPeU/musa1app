import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GeneralRoutingModule } from './general-routing.module';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [PersonaComponent],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FormsModule
  ]
})
export class GeneralModule { }
