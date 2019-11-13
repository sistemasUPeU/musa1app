import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators'

import { Persona } from '../base-models/Persona';
import { TipoDocumento } from '../base-models/TipoDocumento';
import { Requisito } from '../base-models/Requisito';
import { TipoRequisito } from '../base-models/TipoRequisito';
import { Usuario } from '../base-models/Usuario';
import { Bus } from '../base-models/Bus';
import { TipoMantenimiento } from '../base-models/TipoMantenimiento';
import { Mantenimiento } from '../base-models/Mantenimiento'
import { DetalleMantenimiento } from '../base-models/DetalleMantenimiento'
import { Curso } from '../base-models/Curso';
import { CursoConductor } from '../base-models/CursoConductor';
import { Producto } from '../base-models/Producto';
import { Marca } from '../base-models/Marca';
import { Categoria } from '../base-models/Categoria';
import { UnidadMedida } from '../base-models/UnidadMedida';
import { TipoAccion } from '../base-models/TipoAccion';
import { Rol } from '../base-models/Rol';
import { UsuarioRol } from '../base-models/UsuarioRol';

import { DetallePedido } from "../base-models/DetallePedido";
import { Pedido } from '../base-models/Pedido';
import { Padron } from '../base-models/Padron';
import { RevisionTecnica } from '../base-models/RevisionTecnica';
import { Opcion } from '../base-models/Opcion';




@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  personas = 'http://localhost:8090/persona/'
  tipoDocumento = 'http://localhost:8090/tipoDocumento/'
  cursos = 'http://localhost:8090/curso/'
  cursoConductores = 'http://localhost:8090/cursoConductor/'
  buses = 'http://localhost:8090/bus/'
  requisitos = 'http://localhost:8090/requisito/'
  tipoRequisito = 'http://localhost:8090/tipoRequisito/'
  seguridad = 'http://localhost:8090/seguridad/'
  opciones = 'http://localhost:8090/opcion/'
  roles = 'http://localhost:8090/rol/'
  tipoMantenimiento = 'http://localhost:8090/tipo_mantenimiento/'
  mantenimiento = 'http://localhost:8090/detalle_mantenimiento/'
  productos= 'http://localhost:8090/producto/'
  marcas= 'http://localhost:8090/marca/'
  categorias= 'http://localhost:8090/categoria/'
  unidadmedidas= 'http://localhost:8090/unidad_medida/'
  tipoaccion='http://localhost:8090/tipo_accion/'
  pedido='http://localhost:8090/detalle_pedido/'
  revitecnicas= 'http://localhost:8090/revisiontecnica/'

  mantenimiento2 = 'http://localhost:8090/mantenimiento/'


  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.personas);
  }
  getPersonaId(idpersona: number): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personas+idpersona);
  }
  searchPersona(nombre: String): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personas+'search/'+nombre);
  }
  createPersona(persona: Persona){
    return this.http.post<Persona>(this.personas + 'add',persona);
  }
  updatePersona(persona: Persona){
    return this.http.put<Persona>(this.personas + persona.id_persona, persona);
  }
  deletePersona(persona: Persona){
    return this.http.delete<Persona>(this.personas + persona.id_persona);
  }
  getTipoDocumento(): Observable<TipoDocumento[]>{
    return this.http.get<TipoDocumento[]>(this.tipoDocumento);
  }
  getTipoDocumentoId(idtipodocumento: number): Observable<TipoDocumento[]> {
    return this.http.get<TipoDocumento[]>(this.tipoDocumento+idtipodocumento);
  }
  getRequisito(): Observable<Requisito[]>{
    return this.http.get<Requisito[]>(this.requisitos);
  }
  getRequisitoId(idrequisito: number): Observable<Requisito[]>{
    return this.http.get<Requisito[]>(this.requisitos+idrequisito);
  }
  createRequisito(requisito: Requisito){
    return this.http.post<Requisito>(this.requisitos+'add',requisito);
  }
  updateRequisito(requisito: Requisito) {
    return this.http.put<Requisito>(this.requisitos +requisito.id_requisito, requisito);
  }
  deleteRequisito(requisito: Requisito) {
    return this.http.delete<Requisito>(this.requisitos+requisito.id_requisito);
  }
  getTipoRequisito(): Observable<TipoRequisito[]>{
    return this.http.get<TipoRequisito[]>(this.tipoRequisito);
  }
  getCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.cursos)
  }
  getCursoConductor(): Observable<CursoConductor[]> {
    return this.http.get<CursoConductor[]>(this.cursoConductores)
  }
  createCursoConductor(cursoConductor: CursoConductor) {
    return this.http.post<CursoConductor>(this.cursoConductores+'add',cursoConductor);
  }
  updateCursoConductor(cursoConductor: CursoConductor) {
    return this.http.put<CursoConductor>(this.cursoConductores+cursoConductor.id_curso_conductor, cursoConductor);
  }
  getCursoConductorId(idcurso: number): Observable<CursoConductor[]> {
    return this.http.get<CursoConductor[]>(this.cursoConductores+idcurso);
  }
  getOpcion(): Observable<Opcion[]> {
    return this.http.get<Opcion[]>(this.opciones);
  }
  getRol(): Observable<Rol[]>{
    return this.http.get<Rol[]>(this.roles)
  }
  createRol(rol: Rol) {
    return this.http.post<Rol>(this.roles+'add',rol);
  }
  createUsuarioRol(usuarioRol: UsuarioRol) {
    return this.http.post<UsuarioRol>(this.seguridad+'add/rol',usuarioRol);
  }
  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.seguridad);
  }
  createUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.seguridad+'add',usuario);
  }
  validarUsuario(usuario: Usuario){
    return this.http.post<Usuario>(this.seguridad+'validar',usuario).pipe(map(data => {
      if(data['usuario'].length!=0){
        localStorage.setItem('currentUser', JSON.stringify(data['usuario']))
      }
      return data;
    }));
  }
  getBus(): Observable<Bus[]>{
    return this.http.get<Bus[]>(this.buses)
  }
  createBus(bus: Bus){
    return this.http.post<Bus>(this.buses + 'add',bus);
  }
  getBusPlaca(placa: String): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.buses+placa);
  }
  UpdateBus(bus: Bus){
    return this.http.put<Bus>(this.buses + bus.id_bus, bus);
  }
  DeleteBus(bus: Bus): Observable<Bus[]>{
    return this.http.delete<Bus[]>(this.buses+bus.id_bus);
  }

   // ----- TIPO MANTENIMIENTO ---- //

   getTipoMantenimiento(): Observable<TipoMantenimiento[]>{
    return this.http.get<TipoMantenimiento[]>(this.tipoMantenimiento);
  }
  
  getTipoMantenimientoId(id_tipo_mantenimiento: number): Observable<TipoMantenimiento[]> {
    return this.http.get<TipoMantenimiento[]>(this.tipoMantenimiento+id_tipo_mantenimiento);
  }
  createTipoMantenimiento(tipomantenimiento: TipoMantenimiento){
    return this.http.post<TipoMantenimiento>(this.tipoMantenimiento + 'add',tipomantenimiento);
  }
  deleteTipoMantenimiento(tipomantenimiento: TipoMantenimiento){
    return this.http.delete<TipoMantenimiento>(this.tipoMantenimiento + tipomantenimiento.id_tipo_mantenimiento);
  }
  updateTipoMantenimiento(tipomantenimiento: TipoMantenimiento){
    return this.http.put<TipoMantenimiento>(this.tipoMantenimiento + tipomantenimiento.id_tipo_mantenimiento, tipomantenimiento);
  }



   // ----- AUTORIZAR PEDIDO ---- //
    getPedido(): Observable<Pedido[]> {
      return this.http.get<Pedido[]>(this.pedido);
    }
    getPedidoId(idpedido: number): Observable<Pedido[]> {
      return this.http.get<Pedido[]>(this.pedido + idpedido);
    }
    getDetallePedido(id_pedido: Pedido): Observable<DetallePedido[]> {
      return this.http.get<DetallePedido[]>(this.pedido+id_pedido)
    }
    deletePedido(pedido: Pedido){
      return this.http.delete<Pedido>(this.pedido + pedido.id_pedido)
    }

     // ----- AUTORIZAR PEDIDO ---- //

      // ----- MANTENIMIENTO ---- //
      getMantenimiento(): Observable<Mantenimiento[]> {
        return this.http.get<Mantenimiento[]>(this.mantenimiento);
      }
      getMantenimientoId(idmantenimiento: number): Observable<Mantenimiento[]> {
        return this.http.get<Mantenimiento[]>(this.mantenimiento2 + idmantenimiento);
      }

      getObtenerid( padron: String): Observable<Padron[]> {
        return this.http.get<Padron[]>(this.mantenimiento2 + 'bus/' + padron)
      }
      createMantenimiento(mantenimientos: Mantenimiento){
        return this.http.post<Mantenimiento>(this.mantenimiento2 + 'add',mantenimientos);
      }

      updateMantenimiento(mantenimientos: Mantenimiento){
        return this.http.put<Mantenimiento>(this.mantenimiento2 + 'observacion/' + mantenimientos.id_mantenimiento,mantenimientos);
      }
      getDetalleMantenimiento(id_mantenimiento: Mantenimiento): Observable<DetalleMantenimiento[]> {
        return this.http.get<DetalleMantenimiento[]>(this.mantenimiento+id_mantenimiento)
      }

      getMantenimientoId2(idmantenimiento: number): Observable<Mantenimiento[]> {
        return this.http.get<Mantenimiento[]>(this.mantenimiento + idmantenimiento);
      }


      // ----- MANTENIMIENTO ---- //

  // ----- TIPO MANTENIMIENTO  ----//
  //Almacen
   //Producto
  getProducto():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.productos);
  }
  getProductoId(idproducto: number):Observable<Producto[]>{
    return this.http.get<Producto[]>(this.productos+idproducto);
  }
  searchProducto(nombre: String): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.productos+'search/'+nombre);
  }
  createProducto(producto: Producto){
    return this.http.post<Producto>(this.productos + 'add',producto);
  }
  deleteProducto(producto: Producto){
    return this.http.delete<Producto>(this.productos + producto.id_producto);
  }
  updateProducto(producto: Producto){
    return this.http.put<Producto>(this.productos + producto.id_producto, producto);
  }

  //------------Marca---------------//
  getMarca():Observable<Marca[]>{
    return this.http.get<Marca[]>(this.marcas);
  }
  createMarca(marca:Marca){
    return this.http.post<Marca[]>(this.marcas+'add',marca);
  }
  updatemarca(marca:Marca){
    return this.http.put<Marca>(this.marcas+marca.id_marca,marca);
  }
  deletemarca(marca:Marca){
    return this.http.delete<Marca>(this.marcas+marca.id_marca);
  }
  getMarcaId(idmarca: number):Observable<Marca[]>{
    return this.http.get<Marca[]>(this.marcas+idmarca);
  }

   //------------Categoria---------------//
  getCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.categorias);
  }
  createCategoria(categoria:Categoria){
    return this.http.post<Categoria>(this.categorias + 'add',categoria)
  }
  UpdateCategoria(categoria:Categoria){
    return this.http.put<Categoria>(this.categorias + categoria.id_categoria,categoria)
  }
  deleteCategoria(categoria: Categoria){
    return this.http.delete<Categoria>(this.categorias+ categoria.id_categoria)
  }
  getCategoriaId(idcategoria: number):Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.categorias+idcategoria);
  }
  //--------------Unidad medida------///
  getUnidadMedida():Observable<UnidadMedida[]>{
    return this.http.get<UnidadMedida[]>(this.unidadmedidas);
  }
  getUnidadMedidaId(idunidadmedida: number):Observable<UnidadMedida[]>{
    return this.http.get<UnidadMedida[]>(this.unidadmedidas+idunidadmedida);
  //Almacen END
  }

  // -- tipo de accion -- //

  getTipoAccion(){
    return this.http.get<TipoAccion[]>(this.tipoaccion)
  }
  getTipoAccionId(id_tipo_accion: number){
    return this.http.get<TipoAccion>(this.tipoaccion+id_tipo_accion)
  }
  createTipoAccion(tipoaccion: TipoAccion){
    return this.http.post<TipoAccion>(this.tipoaccion+"add",tipoaccion)
  }
  updateTipoAccion(tipoaccion: TipoAccion){
    return this.http.put<TipoAccion>(this.tipoaccion + tipoaccion.id_tipo_accion,tipoaccion)
  }
  deleteTipoAccion(tipoaccion: TipoAccion){
    return this.http.delete<TipoAccion>(this.tipoaccion + tipoaccion.id_tipo_accion)
  }

  //----------REVISIONES TECNICAS-----------//
  getRevisionTecnica():Observable<RevisionTecnica[]>{
    return this.http.get<RevisionTecnica[]>(this.revitecnicas);
  }

  

}
