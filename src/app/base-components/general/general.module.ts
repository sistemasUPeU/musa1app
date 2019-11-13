import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from 'src/app/base-directives/dropdown.directive';
import { NgInitDirective } from 'src/app/base-directives/oninit.directive';
import { GeneralRoutingModule } from './general-routing.module';
import { PersonaComponent } from './persona/persona.component';
import { EmpresaComponent } from './empresa/empresa.component';




@NgModule({
  declarations: [
    PersonaComponent,
    ClickOutsideDirective,
    NgInitDirective,
    EmpresaComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FormsModule
  ]
})
export class GeneralModule { }
