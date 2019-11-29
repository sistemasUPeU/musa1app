import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Periodo } from '../../base-models/Periodo';
import { CronoBus } from 'src/app/base-models/CronoBus';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor( private http: HttpClient) { }
  crono = 'http://localhost:8090/crono/';

  getperiodo(): Observable<Periodo[]> {
    return this.http.get<Periodo[]>(this.crono);
  }

  getcro( peri: number): Observable<CronoBus[]> {
    return this.http.get<CronoBus[]>(this.crono + peri);
  }

  getcroC( per: number): Observable<CronoBus[]> {
    return this.http.get<CronoBus[]>(this.crono + 'C/' + per);
  }

  create(cr: CronoBus) {
    return this.http.post<CronoBus>(this.crono + 'add/' , cr);
  }

  createcrono() {
    return this.http.post<CronoBus>(this.crono + 'crono', 0);
  }

  update(p: Periodo) {
    return this.http.put<Periodo>(this.crono + p.id_periodo, p );
  }



}
