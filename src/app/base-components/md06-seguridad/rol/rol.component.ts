import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { Rol } from 'src/app/base-models/Rol';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {
  rol: Rol = new Rol();
  listRoles: Rol[] = [];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getRol().subscribe(data => {
      this.listRoles=data['rols']
    })
  }
  Guardar() {
    this.service.createRol(this.rol).subscribe(data => {
      alert('Registro guardado correctamente...!');
      this.ngOnInit();
    })
  }
}
