import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MD01CondsyBusesRoutingModule } from './md01-condsy-buses-routing.module';
import { RequisitoComponent } from './requisito/requisito.component';
import { BusesComponent } from './buses/buses.component';
import { CursoComponent } from './curso/curso.component';
import { ClickOutsideDirective2 } from 'src/app/base-directives/dropdown2.0.directive';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterBusPipe} from 'src/app/Search/filter-bus.pipe';


 
@NgModule({
  declarations: [RequisitoComponent, BusesComponent, CursoComponent, ClickOutsideDirective2,FilterBusPipe],
  imports: [
    CommonModule,
    FormsModule,
    MD01CondsyBusesRoutingModule,
    NgbModule
  ]

})
export class MD01CondsyBusesModule { }
