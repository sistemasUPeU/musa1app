import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ServiceService } from '../base-services/service.service'
import { Usuario } from '../base-models/Usuario'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
      public router: Router, private service: ServiceService
    ) {}
    usuario : Usuario = new Usuario();
    user: Usuario[] =[];

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    validateUser(user: Usuario) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}
