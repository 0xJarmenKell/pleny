import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit{
  @Input() currentPage: number = 1;
  @Input() limit: number = 20;
  @Input() total: number = 0;
  @Output() onPageChange = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit(): void {
      const pagesCount = Math.ceil(this.total / this.limit); 
      this.pages = this.range(1, pagesCount);
      console.log(this.pages);
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }

  pageChange(page: number): void {
    this.onPageChange.emit(page);
  }
}
