import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DateTimeFormat'
})
export class DateTimeFormatPipe implements PipeTransform {

  transform(date: Date | string) {
    const d = new DatePipe('en-US');
    const newDate = d.transform(date, 'dd.MM.yyyy - hh:mm');
    return newDate;
  }

}
