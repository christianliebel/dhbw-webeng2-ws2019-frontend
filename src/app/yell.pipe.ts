import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'yell'
})
export class YellPipe implements PipeTransform {

  transform(value: string, suffix: string = '!!!'): string {
    return `${value}${suffix}`;
  }

}
