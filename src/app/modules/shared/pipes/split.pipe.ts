import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(text: string | undefined, by: string, index: number = 1) {
    console.log("*****************************")
    console.log(text);
    /* @ts-ignore */
    let array = text as string[];
    return array; // after splitting to array return wanted index
  }

}
