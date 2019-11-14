import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { Usuario } from 'src/app/base-models/Usuario';
import {EncrDecrService} from 'src/app/base-services/encr-decr.service';
import { Persona } from 'src/app/base-models/Persona';
import { Rol } from 'src/app/base-models/Rol';
import { UsuarioRol } from 'src/app/base-models/UsuarioRol';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  oldPassFail: boolean;
  newpassConfirm: boolean;
  name: any;
  castedUser: any;
  usuario: Usuario = new Usuario();
  usuarioUpdate: Usuario = new Usuario();
  usuarioRol: UsuarioRol = new UsuarioRol();
  persona: Persona = new Persona();
  rol: Rol = new Rol();
  selectedRol: number = null;
  selectedPersona: string = null;
  selectedSuperUser: string = null;
  listUsers: Usuario[] = [];
  listPersona: Persona[] = [];
  listRol: Rol[] = [];
  contrasena:string;
  encPassword: string;  
  oldpassreceived: string;
  oldpass: string;
  newpass: string;
  confnewpass: string;
  constructor(private service: ServiceService, private router: Router,private EncrDecr: EncrDecrService) { }

  ngOnInit() {
    this.service.getUsuario().subscribe((data) => {
      this.listUsers = data['users']
    })
  }
  selectRol(event: any) {
    this.selectedRol = event.target.value;
  }
  selectPersona(event: any) {
    this.selectedPersona = event.target.value;
  }
  loadSelects() {
    this.loadPersona();
    this.loadRol();
  }
  loadPersona() {
    this.service.getPersona().subscribe((data) => {
      this.listPersona = data['pers']
    })
  }
  loadRol() {
    this.service.getRol().subscribe((data) => {
      this.listRol = data['rols']
    })
  }
  selectSuperUser(event: any) {
    this.selectedSuperUser = event.target.value;
  }
  Guardar() {
    this.encPassword=this.EncrDecr.set('123456$#@$^@1ERF', this.contrasena);
    this.usuario.contrasena=this.encPassword;
    this.usuario.cod_persona=this.selectedPersona;
    this.name=JSON.parse(localStorage.getItem('currentUser'))
    this.usuario.usuario_creacion=this.name[0].nom_usuario
    this.usuario.super_usuario=this.selectedSuperUser;
    this.service.createUsuario(this.usuario).subscribe(data =>{
      this.castedUser=data;
      this.usuarioRol.id_rol=this.selectedRol;
      this.usuarioRol.id_usuario=this.castedUser.idu;
      this.service.createUsuarioRol(this.usuarioRol).subscribe(data => {
        alert('Registro guardado correctamente...!');
        this.ngOnInit();
      })
    });
  }
  loadUsuario(usuario: Usuario) {
    this.oldpassreceived=this.EncrDecr.get('123456$#@$^@1ERF', usuario.contrasena);
    this.usuario=usuario;
  }
  clearUpdatePass(){
    this.oldpass = '';
    this.newpass = '';
    this.confnewpass = '';
  }
  updatePass(oldpass:string,newpass:string,confnewpass:string,iduser:number) {
    if(oldpass==this.oldpassreceived) {
      this.oldPassFail=false;
      if(confnewpass==newpass){
        this.newpassConfirm=false;
        this.usuarioUpdate.contrasena=this.EncrDecr.set('123456$#@$^@1ERF',confnewpass);
        this.usuarioUpdate.id_usuario=iduser;
        this.service.updatePass(this.usuarioUpdate).subscribe((data)=> {
          alert('Contraseña actualizada correctamente')
          window.location.reload();
        })
      }else{
        this.newpassConfirm=true;
      }
    }else{
      this.oldPassFail=true;
    }
  }
}
