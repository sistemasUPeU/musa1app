import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { Usuario } from 'src/app/base-models/Usuario';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  listUsers: Usuario[] = [];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getUsuario().subscribe((data) => {
      this.listUsers = data['users']
    })
  }

}
