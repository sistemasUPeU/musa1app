import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinculacionService } from 'src/app/base-services/vinculacion.service';
import { VinculacionBusComponent } from './vinculacion-bus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [VinculacionBusComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    VinculacionService
  ]
})
export class VinculacionBusModule { }
