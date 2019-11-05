import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinculacionRoutingModule } from './vinculacion-routing.module';
import { VinculacionConductorComponent } from './vinculacion-conductor/vinculacion-conductor.component';

@NgModule({
  declarations: [VinculacionConductorComponent],
  imports: [
    CommonModule,
    VinculacionRoutingModule
  ]
})
export class VinculacionModule { }
