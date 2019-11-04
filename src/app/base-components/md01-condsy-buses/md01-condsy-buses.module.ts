import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MD01CondsyBusesRoutingModule } from './md01-condsy-buses-routing.module';
import { ConductorComponent } from './conductor/conductor.component';
import { VinculacionComponent } from './vinculacion/vinculacion.component';
import { RequisitoComponent } from './requisito/requisito.component';

@NgModule({
  declarations: [ConductorComponent, VinculacionComponent, RequisitoComponent],
  imports: [
    CommonModule,
    MD01CondsyBusesRoutingModule
  ]
})
export class MD01CondsyBusesModule { }
