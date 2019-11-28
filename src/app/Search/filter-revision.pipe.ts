import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRevision'
})
export class FilterRevisionPipe implements PipeTransform {

  transform(value: any, arg?: any): any {
    const resultRevision = [];
    if(arg == '') return value;
    for( const post of value){
      if(post.id_bus.toLowerCase().indexOf(arg.toLowerCase())> - 1){
        resultRevision.push(post);
      }
    }
    return resultRevision;
  }

}
