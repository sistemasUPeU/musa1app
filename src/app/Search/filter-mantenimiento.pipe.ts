import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMantenimiento'
})
export class FilterMantenimientoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultEncontrado = [];
    if(arg == '') return value;
    for( const post of value){
      if(post.placa.toLowerCase().indexOf(arg.toLowerCase())> - 1){
        resultEncontrado.push(post);
      }
    }
    return resultEncontrado;
  }

}
