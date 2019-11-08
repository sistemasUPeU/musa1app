import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBus'
})
export class FilterBusPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultBus = [];
    if(arg == '') return value;
    for( const post of value){
      if(post.placa.toLowerCase().indexOf(arg.toLowerCase())> - 1){
        resultBus.push(post);
      }
    }
    return resultBus;
  }

}
