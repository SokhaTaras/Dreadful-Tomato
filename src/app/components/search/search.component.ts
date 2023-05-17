import {Component, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  {
  @Output() yearChanged = new EventEmitter<number>();
  @Output() searchChanged = new EventEmitter<string>();

   year: number = new Date().getFullYear();
   search = '';
   page = 1;


  setYear(event) {
      this.year = event;
      this.yearChanged.next(+this.year);
  }
  setSearch() {
       this.searchChanged.next(this.search);
  }

}
