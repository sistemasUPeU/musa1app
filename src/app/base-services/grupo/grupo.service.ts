import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Mes } from '../../base-models/Mes';
import { Grupo } from '../../base-models/Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private minuto: String[] = ['00', '01', '02' , '03', '04', '05' , '06', '07', '08' , '09', '10', '11' , '12',
  '13', '14' , '15', '16', '17' , '18', '19', '20' , '21', '22', '23' , '24',
  '25', '26' , '27', '28', '29' , '30', '31', '32' , '33', '34', '34' , '35',
  '36', '37' , '38', '39', '40' , '41', '42', '43' , '44', '45', '46' , '47',
  '48', '49' , '50', '51', '52' , '53', '54', '55' , '56', '57', '58' , '59', '60' ];

  private hora: String[] = ['03', '04', '05', '06', '07', '08', '09'];
  constructor( private http: HttpClient) {}
  grupos = 'http://localhost:8090/grupo/';

  getminutos() {
    return this.minuto;
  }
  gethora() {
    return this.hora;
  }

  getmes(): Observable<Mes[]> {
  return this.http.get<Mes[]>(this.grupos);
  }

  getgrupo(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.grupos + '1');
  }

  update() {
    return this.http.put<Grupo>(this.grupos +  1, 0);
  }

  delete(grupo: Grupo) {
    return this.http.delete<Grupo>(this.grupos + grupo.id_grupo);
  }

  creategrupo(grupo: Grupo) {
    return this.http.post<Grupo>(this.grupos + 'add', grupo);
  }



}
