import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,  private service: ServiceService) {}

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }  
}
