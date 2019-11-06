import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GeneralRoutingModule } from './general-routing.module';
import { PersonaComponent } from './persona/persona.component';
import { ClickOutsideDirective } from 'src/app/base-directives/dropdown.directive';
import { NgInitDirective } from 'src/app/base-directives/oninit.directive';



@NgModule({
  declarations: [
    PersonaComponent,
    ClickOutsideDirective,
    NgInitDirective
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FormsModule
  ]
})
export class GeneralModule { }
