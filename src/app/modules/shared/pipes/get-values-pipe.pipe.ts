import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getValues'
})
export class GetValuesPipePipe implements PipeTransform {

  transform(map: Map<any, any>): any[] {
    let ret: any[] = [];
    map.forEach((val, key) => {
      ret.push({
        key: key,
        val: val
      });
    });

    return ret;
  }

}
