import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Persona } from '../base-models/Persona';
import { TipoDocumento } from '../base-models/TipoDocumento';
import { Requisito } from '../base-models/Requisito';
import { TipoRequisito } from '../base-models/TipoRequisito';
import { Usuario } from '../base-models/Usuario';
import { Bus } from '../base-models/Bus';
import { TipoMantenimiento } from '../base-models/TipoMantenimiento';
import { Curso } from '../base-models/Curso';
import { CursoConductor } from '../base-models/CursoConductor';





@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  personas = 'http://localhost:8090/persona/'
  tipoDocumento = 'http://localhost:8090/tipoDocumento/'
  cursos = 'http://localhost:8090/curso/'
  cursoConductores = 'http://localhost:8090/cursoConductor/'
  buses = 'http://localhost:8090/bus/'
  requisitos = 'http://localhost:8090/requisito/'
  tipoRequisito = 'http://localhost:8090/tipoRequisito/'
  seguridad = 'http://localhost:8090/seguridad/'
  tipoMantenimiento = 'http://localhost:8090/tipo_mantenimiento/'
  
  
  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.personas);
  }
  getPersonaId(idpersona: number): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personas+idpersona);
  }
  searchPersona(nombre: String): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personas+'search/'+nombre);
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
  getTipoDocumentoId(idtipodocumento: number): Observable<TipoDocumento[]> {
    return this.http.get<TipoDocumento[]>(this.tipoDocumento+idtipodocumento);
  }
  getRequisito(): Observable<Requisito[]>{
    return this.http.get<Requisito[]>(this.requisitos);
  }
  getRequisitoId(idrequisito: number): Observable<Requisito[]>{
    return this.http.get<Requisito[]>(this.requisitos+idrequisito);
  }
  createRequisito(requisito: Requisito){
    return this.http.post<Requisito>(this.requisitos+'add',requisito);
  }
  updateRequisito(requisito: Requisito) {
    return this.http.put<Requisito>(this.requisitos +requisito.id_requisito, requisito);
  }
  deleteRequisito(requisito: Requisito) {
    return this.http.delete<Requisito>(this.requisitos+requisito.id_requisito);
  }
  getTipoRequisito(): Observable<TipoRequisito[]>{
    return this.http.get<TipoRequisito[]>(this.tipoRequisito);
  }
  getCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.cursos)
  }
  getCursoConductor(): Observable<CursoConductor[]> {
    return this.http.get<CursoConductor[]>(this.cursoConductores)
  }
  getCursoConductorId(idcurso: number): Observable<CursoConductor[]> {
    return this.http.get<CursoConductor[]>(this.cursoConductores+idcurso);
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
  deleteTipoMantenimiento(tipomantenimiento: TipoMantenimiento){
    return this.http.delete<Persona>(this.tipoMantenimiento + tipomantenimiento.id_tipo_mantenimiento);
  }


}
