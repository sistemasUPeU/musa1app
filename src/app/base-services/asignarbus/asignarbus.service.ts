import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AsignarBus } from 'src/app/base-models/AsignarBus';
import { Observable } from 'rxjs';
import { Bus } from 'src/app/base-models/Bus';
import { Paradero } from 'src/app/base-models/Paradero';

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
  updateDetalleBusGrupo(asignarbus: AsignarBus ){
    return this.http.put<AsignarBus>(this.asignarbuses + asignarbus.id_bus ,asignarbus );

  }
  getfill(num: number): Observable<AsignarBus[]> {
    return this.http.get<AsignarBus[]>(this.asignarbuses + 'fil/' + num);
  }
}
