import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponsePersona,Per , Persona} from '../base-models/Persona';
import { ApiResponseTipoDocumento, Tipodoc } from '../base-models/TipoDocumento';



@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  personas = 'http://localhost:8090/persona/'
  tipoDocumento = 'http://localhost:8090/tipoDocumento/'
  
  getPersona(): Observable<ApiResponsePersona>{
    return this.http.get<ApiResponsePersona>(this.personas);
  }
  createPersona(persona: Persona){
    return this.http.post<Persona>(this.personas + 'add',persona);
  }
  deletePersona(persona: Persona){
    return this.http.delete<Persona>(this.personas + persona.ID_PERSONA);
  }
  getTipoDocumento(): Observable<ApiResponseTipoDocumento>{
    return this.http.get<ApiResponseTipoDocumento>(this.tipoDocumento);
  }
}
