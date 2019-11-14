import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AsignarBus } from 'src/app/base-models/AsignarBus';
import { Observable } from 'rxjs';
import { Bus } from 'src/app/base-models/Bus';
import { Paradero } from 'src/app/base-models/Paradero';
import {  DetalleBusGrupo } from 'src/app/base-models/DetalleBusGrupo';

@Injectable({
  providedIn: 'root'
})
export class AsignarbusService {

  constructor(private http: HttpClient) { }

  asignarbuses= 'http://localhost:8090/asignarbus/'
  buses = 'http://localhost:8090/bus/'
  

  getAsignarBus(): Observable <AsignarBus[]>{
    return this.http.get<AsignarBus[]>(this.asignarbuses +"list" );
  }

  getBus(): Observable<Bus[]>{
    return this.http.get<Bus[]>(this.buses);
  }
  getParadero(): Observable<Paradero[]>{
    return this.http.get<Paradero[]>(this.asignarbuses + "paradero");

  }
  updateDetalleBusGrupo(detalleBusGrupo: DetalleBusGrupo ){
    return this.http.put<DetalleBusGrupo>(this.asignarbuses + detalleBusGrupo.ID_DETALLE_BUS_GRUPO  ,detalleBusGrupo );

  }   
}
