import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitLength'
})
export class LimitLengthPipe implements PipeTransform {

  transform(value: string): string {
    return value?.length > 22 ? `${value.substr(0, 22)}...` : value;
  }

}
