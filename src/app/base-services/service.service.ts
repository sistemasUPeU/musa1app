import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Persona } from '../base-models/Persona';
import { TipoDocumento } from '../base-models/TipoDocumento';
import { Requisito } from '../base-models/Requisito';
import { TipoRequisito } from '../base-models/TipoRequisito';
import { Usuario } from '../base-models/Usuario';
import { Bus } from '../base-models/Bus';
import { TipoMantenimiento } from '../base-models/TipoMantenimiento';
import { Curso } from '../base-models/Curso';
import { CursoConductor } from '../base-models/CursoConductor';
import { Producto } from '../base-models/Producto';
import { Marca } from '../base-models/Marca';
import { Categoria } from '../base-models/Categoria';
import { UnidadMedida } from '../base-models/UnidadMedida';
import { TipoAccion } from '../base-models/TipoAccion';






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
  tipoMantenimiento = 'http://localhost:8090/tipo_mantenimiento/'
  productos= 'http://localhost:8090/producto/'
  marcas= 'http://localhost:8090/marca/'
  categorias= 'http://localhost:8090/categoria/'
  unidadmedidas= 'http://localhost:8090/unidad_medida/'
  tipoaccion='http://localhost:8090/tipo_accion/'

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
  getCursoConductorId(idcurso: number): Observable<CursoConductor[]> {
    return this.http.get<CursoConductor[]>(this.cursoConductores+idcurso);
  }
  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.seguridad);
  }
  
  getBus(): Observable<Bus[]>{
    return this.http.get<Bus[]>(this.buses)
  }
  createBus(bus: Bus){
    return this.http.post<Bus>(this.buses + 'add',bus);
  }
  getBusId(placa: String): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.buses+String);
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
    return this.http.delete<TipoMantenimiento >(this.tipoMantenimiento + tipomantenimiento.id_tipo_mantenimiento);
  }
  updateTipoMantenimiento(tipomantenimiento: TipoMantenimiento){
    return this.http.put<TipoMantenimiento>(this.tipoMantenimiento + tipomantenimiento.id_tipo_mantenimiento, tipomantenimiento);
  }
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
    return this.http.post<Producto>(this.productos+producto.id_producto,producto);
  }
  deleteProducto(producto: Producto){
    return this.http.delete<Producto>(this.productos + producto.id_producto);
  }
  updateProducto(producto: Producto){
    return this.http.put<Producto>(this.productos + producto.id_producto,producto);
  }

  //------------Marca---------------//
  getMarca():Observable<Marca[]>{
    return this.http.get<Marca[]>(this.marcas);
  }
  getMarcaId(idmarca: number):Observable<Marca[]>{
    return this.http.get<Marca[]>(this.marcas+idmarca);
  }

   //------------Categoria---------------//
  getCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.categorias);
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
}
