import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ServiceService } from '../base-services/service.service'
import {EncrDecrService} from 'src/app/base-services/encr-decr.service';
import { Usuario } from '../base-models/Usuario'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
      public router: Router, private service: ServiceService,private EncrDecr: EncrDecrService
    ) {}
    usuario : Usuario = new Usuario();
    user: Usuario[] =[];
    contrasena: any;
    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    validateUser(user: Usuario) {
        user.contrasena=this.EncrDecr.set('123456$#@$^@1ERF', this.contrasena);
        this.service.validarUsuario(user).subscribe(
            data => {
                if(data['usuario'].length==0){
                    alert('Nombre de usuario/contraseña incorrectos')
                }else{
                this.router.navigate(['general/persona'])
                }
            });
    }
}
