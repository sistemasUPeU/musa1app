import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VinculacionService } from 'src/app/base-services/vinculacion.service';
import { VinculacionRequisito } from 'src/app/base-models/VinculacionRequisito';
import { Vinculacion } from 'src/app/base-models/Vinculacion';
import { Persona } from 'src/app/base-models/Persona';
import { Bus } from 'src/app/base-models/Bus';
import { VistaVinculacion } from 'src/app/base-models/VistaVinculacionBus';

@Component({
  selector: 'app-vinculacion-bus',
  templateUrl: './vinculacion-bus.component.html',
  styleUrls: ['./vinculacion-bus.component.scss']
})
export class VinculacionBusComponent implements OnInit {
  @ViewChild('iBuscarPlaca', {static: false})  iBuscarPlaca: ElementRef;
  @ViewChild('modalVinculacion', {static: false}) modalVinculacion: ElementRef;

  constructor(private vinculacionService: VinculacionService) { }

  ngOnInit() {
    this.limpiarModalVinculacion()
    this.cargarTablaVinculacionBus()
    this.cargarRequisitosVinculacionBus();
  }

  vinculaciones: VistaVinculacion[];

  //MODAL
  requisito_modal = []; //Guarda requisitos para la vinculacion
  vreqs_modal:VinculacionRequisito[] = [];  //Guarda vinculacion requisito para generar los registros
  vinculacion_modal:Vinculacion = new Vinculacion();  //Guarda vinculacion para generar registro
  vreqs_pos = -1; //Guarda la posion de la vinculacion_requisito para cargarle la url
  url_modal = null; //Guarda la url del modal
  mode_modal = '' //Modo de uso del modal (Crear o modificar);

  //MODAL CREATE
  propietario_modal:Persona = new Persona();
  bus_modal: Bus = new Bus(); 
  placa_modal: string;  //Guarda resultado del imput placa

//CREAR Y MODIFICAR///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  registrarVinculacionBus(){
    // console.log('registrarVinculacion: ')
    // console.log('*vinculacion:')
    // console.log(this.vinculacion_modal)
    // console.log('*vRequisitos:')
    // console.log(this.vreqs_modal)
    this.vinculacionService.registrarVinculacionBus(this.vinculacion_modal).subscribe((data) => {
      let id = data;
      // console.log('*id_vinculacion: ' + id);
      // console.log('vrequisitos (antes de crear):')
      // console.log(this.vreqs_modal)
      for(let i = 0; i < this.vreqs_modal.length; i++){
        this.vinculacionService.registrarVinculacionRequisito(this.vreqs_modal[i], id).subscribe((data1) => {
          // console.log(' *creo_vinculacion '+(i+1))
        });
      }
      this.ngOnInit();
    })
  }
  actualizarVinculacion(){
    this.vinculacionService.modificarVinculacionBus(this.vinculacion_modal).subscribe(data => {
    });
    for(let i = 0; i<this.vreqs_modal.length; i++){
      this.vinculacionService.modificarVrequisitoBus(this.vreqs_modal[i]).subscribe(data => {
      });
    }
    this.limpiarModalVinculacion();
    this.ngOnInit();
  }
//CREAR Y MODIFICAR///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CARGAR DATOS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  cargarRequisitosVinculacionBus(){
    // console.log('cargarRequisitosVinculacionBus')
    this.vinculacionService.cargarRequisitosVinculacionBus().subscribe((data) => {
      this.requisito_modal = data['reqs'];
      for(let i = 0; i<this.requisito_modal.length; i++){
        this.vreqs_modal[i] = new VinculacionRequisito();
        this.vreqs_modal[i].id_requisito = this.requisito_modal[i].ID_REQUISITO;
        //agregar estado
        this.vreqs_modal[i].estado = '2';
        this.vreqs_modal[i].url = 'url';
      }
      // console.log('cargarRequisitosVinculacionBus: despuesde agregar el id_requisito a los vRequisito')
      // console.log('*requisitos:')
      // console.log(this.requisito_modal)
      // console.log('*vRequisitos:')
      // console.log(this.vreqs_modal)
      // console.log('Estan en el mismo orden?')
      // //Si estan en el mismo orden
      //agregar estado vinculacion
      this.actualizarEstadoVinculacion();
    })
  }  
  cargarTablaVinculacionBus(){
    this.vinculacionService.listarVistaVinculacionBus().subscribe((data) => {
      this.vinculaciones = data['vcs']
    })
  }
  cargarInvolucrados(placa: string){
    //Cargar bus
    this.vinculacionService.listarInvolucradosBus(placa).subscribe((data) => {
      let p = data['prop'][0]
      this.propietario_modal = p;
      let b =  data['bus'][0];
      this.bus_modal = b;
      //cargar datos en los objetos
      this.vinculacion_modal.id_bus = this.bus_modal.id_bus;
    });
  }
  cargarElementosVinculacionBus(id: number){
    this.vinculacionService.cargarElementosVinculacionBus(id).subscribe(data => {
      this.vinculacion_modal = data['v'][0];
      let vrs = data['vrs'];

      for(let i = 0; i < this.vreqs_modal.length; i++){
        for(let j = 0; j < vrs.length; j++){
          if(this.vreqs_modal[i].id_requisito ===  vrs[j].id_requisito){
            // console.log(' *entro '+this.vreqs_modal[i].id_requisito +' = '+  vrs[j].id_requisito)
            this.vreqs_modal[i] = vrs[j];
            break;
          }
        }
      }
      // console.log('Elementos vinculacion:')
      // console.log(data)
      // console.log('Elementos vinculacion cargados:')
      // console.log(vrs)
      // console.log(this.vreqs_modal);
    });
  }
//CARGAR DATOS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCIONES DE BOTONES///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  guardarVinculacion(){
    this.registrarVinculacionBus();
  }
  accionEliminarVinculacionBus(placa: string){
    let conf = confirm('Esta seguro de eliminar la vinculacion?')
    if(conf){
      this.vinculacionService.anularvinculacionBus(placa).subscribe((data) => {
      })
    }
    this.ngOnInit();
  }
  modificarVinculacion(){
    this.actualizarVinculacion();
  }
  accionModalCancelar(){
    this.limpiarModalVinculacion();
  }
//FUNCIONES DE BOTONES///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  actualizarEstadoRequisito(pos: number){
    if(this.vreqs_modal[pos].url === null || this.vreqs_modal[pos].url === ''){
      this.vreqs_modal[pos].estado = '2';
    }else{
      this.vreqs_modal[pos].estado = '1';
    }
    this.actualizarEstadoVinculacion();
  }

  mostrarEstado(estado: string){
    if(estado === '1'){
      return 'Completo';
    }else if (estado === '2'){
      return 'Pendiente';
    }
  }

  actualizarEstadoVinculacion(){
    // console.log('actualizarEstadoVinculacion')
    let estado = '1'
    for(let i=0; i<this.vreqs_modal.length; i++){
      if(this.vreqs_modal[i].estado === '2'){
        estado = '2';
      }
    }
    this.vinculacion_modal.estado = estado;
  }
  
  selectorVReqsToggle(pos: number){
    // console.log('url_modal: ' + this.url_modal)
    // console.log('posicion: ' + pos)
    // console.log('* vRequisito antes de agregar url:')
    // console.log(this.vreqs_modal[pos])
    if(pos === this.vreqs_pos){
      this.vreqs_modal[pos].url = this.url_modal;
      // console.log('* vRequisito despues de agregar url:')
      // console.log(this.vreqs_modal[pos])
      this.actualizarEstadoRequisito(pos);
      this.vreqs_pos = -1;
      this.url_modal = null;
    }else{
      this.vreqs_pos = pos;
      this.url_modal = this.vreqs_modal[pos].url;
    }
  }


  limpiarModalVinculacion(){
    this.placa_modal = '';
    this.propietario_modal = new Persona();
    this.bus_modal = new Bus();
    this.vinculacion_modal = new Vinculacion();
    this.vreqs_pos = -1;
    this.url_modal = null;
    this.cargarRequisitosVinculacionBus();
    // console.log('limpio modal vinculacion!!!')

    // requisito_modal = []; //Guarda requisitos para la vinculacion
    // vreqs_modal: VinculacionRequisito[] = [];  //Guarda vinculacion requisito para generar los registros
    // vinculacion_modal: Vinculacion = new Vinculacion();  //Guarda vinculacion para generar registro
    // vreqs_pos = -1; //Guarda la posion de la vinculacion_requisito para cargarle la url
    // url_modal = null; //Guarda la url del modal
    // mode_modal = '' //Modo de uso del modal (Crear o modificar);
  }

  cambiarModoModal(modo: string){
    this.mode_modal = modo;
  }

  accionModificarVinculacionBus(id: number, placa: string){
    // console.log(this.vreqs_modal)
    this.cambiarModoModal('modificar');
    this.cargarInvolucrados(placa);
    this.cargarElementosVinculacionBus(id);
  }

  // METODOS BUSCAR

  accionBuscarVinculacion(){
    console.log('accionBuscarVinculacion:')
    let placa = this.iBuscarPlaca.nativeElement.value;
    let id;
    let i;
    this.iBuscarPlaca.nativeElement.value = '';
    for(i = 0; i < this.vinculaciones.length; i++){
      if(this.vinculaciones[i].placa === placa){
        id = this.vinculaciones[i].id_vinculacion;
        break;
      }
    }
    if(i === this.vinculaciones.length){
      alert('No se encontro el numero de placa');
    }else{
      console.log('Se encontro la placa')
      this.accionModificarVinculacionBus(id, placa);
      // console.log(this.modalVinculacion.nativeElement)
      // this.modalVinculacion.nativeElement.setAttribute('aria-hidden', 'true');
    }
    //obtener placa
    //buscar vinculacion que tenga esa numero de placa
      //funcion accionModificaraVinculacionBus(,)
  }
}
