import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service'
import { Usuario } from 'src/app/base-models/Usuario'
import { LoginComponent } from 'src/app/login/login.component'


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,  private service: ServiceService) {}
    user: Usuario = new Usuario();

    canActivate() {
        this.user = JSON.parse(localStorage.getItem('user'))
        console.log(this.user)
        this.service.validarUsuario(this.user).subscribe((data)=> {
            this.user=data['usuario']
            console.table(this.user)
            if(this.user!=null){
                localStorage.setItem('usuario',JSON.stringify(this.user))
            }else{
                console.log('incorrecto')
                localStorage.removeItem('user')
            }
        })
        if (localStorage.getItem('usuario')) {
            return true;
        }

        this.router.navigate(['/login']);
        alert('Nombre de usuario/contraseña incorrectos')
        return false;
    }
}
