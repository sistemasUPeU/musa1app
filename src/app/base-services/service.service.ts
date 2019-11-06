import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Persona } from '../base-models/Persona';
import { TipoDocumento } from '../base-models/TipoDocumento';
import { Requisito } from '../base-models/Requisito';
import { Usuario } from '../base-models/Usuario';
import { Bus } from '../base-models/Bus';
import { TipoMantenimiento } from '../base-models/TipoMantenimiento';





@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  personas = 'http://localhost:8090/persona/'
  tipoDocumento = 'http://localhost:8090/tipoDocumento/'
  buses = 'http://localhost:8090/bus/'
  requisitos = 'http://localhost:8090/requisito/'
  seguridad = 'http://localhost:8090/seguridad/'
  tipoMantenimiento = 'http://localhost:8090/tipo_mantenimiento/'
  
  
  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.personas);
  }
  getPersonaId(idpersona: number): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personas+idpersona);
  }
  createPersona(persona: Persona){
    return this.http.post<Persona>(this.personas + 'add',persona);
  }
  updatePersona(persona: Persona){
    return this.http.put<Persona>(this.personas + persona.id_persona, persona);
  }
  deletePersona(persona: Persona){
    return this.http.delete<Persona>(this.personas + persona.id_persona);
  }
  getTipoDocumento(): Observable<TipoDocumento[]>{
    return this.http.get<TipoDocumento[]>(this.tipoDocumento);
  }
  getRequisito(): Observable<Requisito[]>{
    return this.http.get<Requisito[]>(this.requisitos);
  }
  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.seguridad);
  }
  
  getBus(): Observable<Bus[]>{
    return this.http.get<Bus[]>(this.buses)
  }
  getTipoMantenimiento(): Observable<TipoMantenimiento[]>{
    return this.http.get<TipoMantenimiento[]>(this.tipoMantenimiento);
  }
  getTipoMantenimientoId(id_tipo_mantenimiento: number): Observable<TipoMantenimiento[]> {
    return this.http.get<TipoMantenimiento[]>(this.tipoMantenimiento+id_tipo_mantenimiento);
  }
  createTipoMantenimiento(tipomantenimiento: TipoMantenimiento){
    return this.http.post<TipoMantenimiento>(this.tipoMantenimiento + 'add',tipomantenimiento);
  }


}
