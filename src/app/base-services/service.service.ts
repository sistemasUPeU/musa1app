import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponsePersona } from '../base-models/Persona';


@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  personas = 'http://localhost:8090/persona/'
  
  getPersona(): Observable<ApiResponsePersona>{
    return this.http.get<ApiResponsePersona>(this.personas);
  }
}
