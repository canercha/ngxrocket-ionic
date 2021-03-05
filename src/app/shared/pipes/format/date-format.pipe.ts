import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DateFormat'
})

export class DateFormatPipe implements PipeTransform {

  transform(date: Date | string) {
    const d = new DatePipe('tr-TR');
    const newDate = d.transform(date, 'dd.MM.yyyy');
    return newDate;
  }

}
