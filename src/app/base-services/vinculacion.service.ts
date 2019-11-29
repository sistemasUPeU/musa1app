import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VistaVinculacion } from '../base-models/VistaVinculacionBus';
import { Observable } from 'rxjs';
import { Vinculacion } from '../base-models/Vinculacion';
import { VinculacionRequisito } from '../base-models/VinculacionRequisito';
import { TipoRequisito } from '../base-models/TipoRequisito';

@Injectable({
  providedIn: 'root'
})
export class VinculacionService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:8090/vinculacion/';

  listarVistaVinculacionBus(): Observable<VistaVinculacion[]> {
    return this.http.get<VistaVinculacion[]>(this.URL+'bus');
  }

  cargarRequisitosVinculacionBus(): Observable<Array<Map<string, Object>>>{
    return this.http.get<Array<Map<string, Object>>>(this.URL+'bus/requisito');
  }

  registrarVinculacionBus(vinculacion: Vinculacion):Observable<number>{
    return this.http.post<number>(this.URL+'bus', vinculacion);
  }

  registrarVinculacionRequisito(vinculacionRequisito: VinculacionRequisito, id: number): Observable<number> {
    return this.http.put<number>(this.URL+'bus/'+id, vinculacionRequisito)
  }

  listarInvolucradosBus(placa: string): Observable<Object> { 
    return this.http.get<Object>(this.URL+'bus/involucrados/'+placa);
  }

  anularvinculacionBus(placa: string){
    return this.http.delete<number>(this.URL+'bus/'+placa);
  }

  cargarElementosVinculacionBus(id: number): Observable<Object>{
    return this.http.get<Object>(this.URL + 'bus/' + id);
  }

  modificarVinculacionBus(vinculacion: Vinculacion): Observable<number>{
    return this.http.post<number>(this.URL + 'bus/update-vinculacion', vinculacion);
  }

  modificarVrequisitoBus(vRequisito: VinculacionRequisito): Observable<number>{
    return this.http.post<number>(this.URL + 'bus/update-vrequisito', vRequisito);
  }

  url2="http://localhost:8090/bus/";
  
  ListRequest(): Observable<TipoRequisito[]> {
    return this.http.get<TipoRequisito[]>(this.url2+'buscar2');
  }

  addRequiVincu(vinculacionRequisito: VinculacionRequisito) {
    return this.http.post<VinculacionRequisito>(this.url2+'addVin', vinculacionRequisito)
  }

}
