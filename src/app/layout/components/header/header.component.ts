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
        console.log(localStorage.getItem('currentUser'))
        this.usuario=JSON.parse(localStorage.getItem('currentUser'))
        console.log(this.usuario)
        this.name=this.usuario[0].nom_usuario
        console.log(this.name)
        this.observableTimer();
    }
    observableTimer() {
        let source = timer(300000);
        source.subscribe(this.onLoggedout)
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

    onLoggedout() {
        localStorage.removeItem('currentUser');
        alert('Sesion expirada')
        window.location.reload();
    }

}
