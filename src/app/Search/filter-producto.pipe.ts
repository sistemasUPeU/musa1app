import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducto'
})
export class FilterProductoPipe implements PipeTransform {

  transform(value: any, arg?: any): any {
    const resultProducto = [];
    if(arg == '') return value;
    for( const post of value){
      if(post.codigo.toLowerCase().indexOf(arg.toLowerCase())> - 1){
        resultProducto.push(post);
      }
    }
    return resultProducto;
  }

}
