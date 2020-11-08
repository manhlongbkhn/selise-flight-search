import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() queries = {};
  @Output() onSearch: EventEmitter<object> = new EventEmitter<object>();

  flightMinDate: Date;
  flightMaxDate: Date;
  returnMinDate: Date;
  returnMaxDate: Date;
  constructor() {
    this.flightMinDate = new Date();
    this.returnMinDate = new Date();

    let flightMaxDate: Date = new Date();
    let returnMaxDate: Date = new Date();

    flightMaxDate.setMonth(flightMaxDate.getMonth() + 11);
    returnMaxDate.setMonth(returnMaxDate.getMonth() + 11);

    this.flightMaxDate = flightMaxDate;
    this.returnMaxDate = returnMaxDate;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  getFlightResults(form) {
    if (!form.valid) {
      return;
    }
    this.queries = form.value;
    this.onSearch.emit(this.queries);
  }
}
