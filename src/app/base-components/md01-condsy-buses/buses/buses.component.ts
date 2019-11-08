import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/base-models/Bus';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { Persona } from 'src/app/base-models/Persona';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent implements OnInit {
  bus : Bus = new Bus();
  listBus: Bus[] = [];
  loadbusData: Bus[] = [];
  listPerson: Persona[]=[];
  estadobus: string = '1';
  searchPerson: number = null;
  showDropDown=false;
  input:String;
  bu: Bus = new Bus();
  searchResult: Persona[] = [];
  selectedPerson: number= null;
  per: Bus = new Bus();
  constructor(private service: ServiceService , private router: Router) { }

  ngOnInit() {
    this.service.getBus().subscribe((data) => {
      this.listBus = data['b']
    })
  }
  guardar(){
    this.bus.estado=this.estadobus;
    this.bus.id_persona_propietario=this.selectedPerson;
    this.service.createBus(this.bus).subscribe(data =>{
      alert('Registro guardado correctamente...!');
      this.ngOnInit();
    });
  }

  Actualizar(pers: Bus) {
    this.service.UpdateBus(pers).subscribe((data) => {
      this.per = data;
      alert('Registro modificado correctamente...!');
      this.ngOnInit();
    })
  }
  Eliminar(bus : Bus){
    console.log("estamos en el metodo eliminar = > " +bus);
    this.service.DeleteBus(bus).subscribe((data)=>{
      alert("Registro eliminado correctamente");
      this.ngOnInit();
    })
  }
  toggleDropDown() {
    this.showDropDown=!this.showDropDown;
  }
  toggleDropDownOff() {
    this.showDropDown=false;
  }
  searchPersona() {
    if(this.input!=''){
      console.log(this.input);
      this.service.searchPersona(this.input).subscribe((data) => {
      this.searchResult = data['return']
      })
    }else{
      console.log('Input vacio');
      this.toggleDropDownOff();
    }
  }

  getPropietario(idpersona:number){
    console.log(idpersona);
    this.service.getPersonaId(idpersona).subscribe((data) => {
      this.listPerson = data['PERS'];
      console.log
    })
  }
  fillSelect(){
    this.service.getPersona().subscribe((data) => {
      this.listPerson = data['pers'];
      console.log(this.listPerson);
    })
  }

  selectPerson(event:any){
    this.selectedPerson = event.target.value;
  }
  
  loadBus(bus: Bus):void{
    this.service.getBusPlaca(bus.placa).subscribe((data) => {
      console.log(bus);
      this.loadbusData = data['bus'];
    })
  }
}
