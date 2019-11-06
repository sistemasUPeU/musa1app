import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MD01CondsyBusesRoutingModule } from './md01-condsy-buses-routing.module';
import { RequisitoComponent } from './requisito/requisito.component';
import { BusesComponent } from './buses/buses.component';
import { CursoComponent } from './curso/curso.component';
 
@NgModule({
  declarations: [RequisitoComponent, BusesComponent, CursoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MD01CondsyBusesRoutingModule
  ]
})
export class MD01CondsyBusesModule { }
