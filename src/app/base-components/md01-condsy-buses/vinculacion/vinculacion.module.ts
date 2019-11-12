import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinculacionRoutingModule } from './vinculacion-routing.module';
import { VinculacionConductorComponent } from './vinculacion-conductor/vinculacion-conductor.component';
import { FormsModule } from '@angular/forms';
import { VinculacionBusComponent } from './vinculacion-bus/vinculacion-bus.component';
import { VinculacionService } from 'src/app/base-services/vinculacion.service';

@NgModule({
  declarations: [VinculacionConductorComponent, VinculacionBusComponent],
  imports: [
    CommonModule,
    VinculacionRoutingModule,
    FormsModule
  ],
  providers:[
    VinculacionService
  ]
})
export class VinculacionModule { }
