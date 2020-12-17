import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitLength'
})
export class LimitLengthPipe implements PipeTransform {

  transform(value: string): string {
    return value?.length > 15 ? `${value.substr(0, 15)}...` : value;
  }

}
