import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsignarConductor } from 'src/app/base-models/asignarconductor';
import { Bus } from 'src/app/base-models/Bus';

@Injectable({
  providedIn: 'root'
})
export class AsignarconductorService {
 
 
  constructor( private http: HttpClient) { }
  url= 'http://localhost:8090/asignarconductor/'
  buses = 'http://localhost:8090/bus/'

  getasignarconductor(): Observable <AsignarConductor[]>{
    return this.http.get<AsignarConductor[]>(this.url + "read");
  } 
  getBus(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.buses);
  }
  
}
