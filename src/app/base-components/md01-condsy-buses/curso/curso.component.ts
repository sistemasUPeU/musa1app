import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { CursoConductor } from 'src/app/base-models/CursoConductor';
import { Curso } from 'src/app/base-models/Curso';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  curso: Curso = new Curso();
  cursoConductor: CursoConductor = new CursoConductor();
  listCursos: Curso[] = [];
  listCursoConductor: CursoConductor[] = [];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.sortbyCurso();
  }
  sortbyCurso() {
    this.service.getCurso().subscribe((data) => {
      this.listCursos = data['cur']
    })
    this.getCursoConductor()
  }
  getCursoConductor() {
    this.service.getCursoConductor().subscribe((data) => {
      this.listCursoConductor = data['dato']
    })
  }
  sortbyConductor() {

  }
}
