import {Component, EventEmitter, Output} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Moment } from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DatePickerComponent {
  @Output() yearChanged = new EventEmitter<number>();

  date = new FormControl();


  setYear(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
    const year = normalizedYear.year();
    const selectedDate = new Date(year, 0, 1);
    this.date.setValue(selectedDate);
    this.yearChanged.next(year);
    datepicker.close();
  }
  setInputYear(event){
    const year = event._i;
    this.yearChanged.next(year);
  }

  resetInputValue(){
    const defaultValue = 2023;
    this.date.setValue(defaultValue);
  }
}
