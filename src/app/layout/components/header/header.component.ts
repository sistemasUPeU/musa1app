import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { timer } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    public name:any;
    usuario: any;
    constructor( private router: Router) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        this.usuario=JSON.parse(localStorage.getItem('currentUser'))
        this.name=this.usuario[0].nom_usuario
        this.observableTimer();
    }
    observableTimer() {
        let source = timer(1500000);
        source.subscribe(this.expiredSession)
      }
    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    expiredSession() {
        alert('Sesion expirada')
        localStorage.removeItem('currentUser');
        window.location.reload();
    }
    onLoggedout() {
        localStorage.removeItem('currentUser');
    }

}
