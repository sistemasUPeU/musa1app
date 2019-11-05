import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MD01CondsyBusesRoutingModule } from './md01-condsy-buses-routing.module';
import { ConductorComponent } from './conductor/conductor.component';
import { RequisitoComponent } from './requisito/requisito.component';
import { BusesComponent } from './buses/buses.component';
 
@NgModule({
  declarations: [ConductorComponent, RequisitoComponent, BusesComponent],
  imports: [
    CommonModule,
    MD01CondsyBusesRoutingModule
  ]
})
export class MD01CondsyBusesModule { }
