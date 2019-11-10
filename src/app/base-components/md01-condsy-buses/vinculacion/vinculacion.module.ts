import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinculacionRoutingModule } from './vinculacion-routing.module';
import { VinculacionConductorComponent } from './vinculacion-conductor/vinculacion-conductor.component';
import { VinculacionBusComponent } from './vinculacion-bus/vinculacion-bus.component';

@NgModule({
  declarations: [VinculacionConductorComponent, VinculacionBusComponent],
  imports: [
    CommonModule,
    VinculacionRoutingModule
  ]
})
export class VinculacionModule { }
