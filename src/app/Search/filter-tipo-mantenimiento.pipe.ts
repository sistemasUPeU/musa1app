import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTipoMantenimiento'
})
export class FilterTipoMantenimientoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultEncontrado = [];
    if(arg == '') return value;
    for( const post of value){
      if(post.tipo_mantenimiento.toLowerCase().indexOf(arg.toLowerCase())> - 1){
        resultEncontrado.push(post);
      }
    }
    return resultEncontrado;
  }

}
