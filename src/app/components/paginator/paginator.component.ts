import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input() page: number | null;
  @Input() total?: number;
  @Input() size?: number = 10;

  @Output() pageChanged = new EventEmitter<number>();

  constructor() {
  }

  get totalPages(): number {
    return Math.ceil(this.total / this.size);
  }

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  previousPage() {
    if (this.page && this.page > 1) {
      this.page--;
      this.onPageChange(this.page);
    }
  }

  nextPage() {
    if (this.page && this.page < this.totalPages) {
      this.page++;
      this.onPageChange(this.page);
    }
  }

  goToPage(page: number) {
    if (this.page !== page && page >= 1 && page <= this.totalPages) {
      this.page = page;
      this.pageChanged.next(page);
      this.onPageChange(this.page);
    }
  }

  onPageChange(page: number) {
    this.pageChanged.next(page);
    this.page = page;
  }
}
