import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterasignarconductor'
})
export class FilterasignarconductorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultEncontrado = [];
    if(arg == '') return value;
    for( const post of value){
      if(post.nombre_persona.toLowerCase().indexOf(arg.toLowerCase())> - 1){
        resultEncontrado.push(post);
      }
    }
    return resultEncontrado;
  }

}
