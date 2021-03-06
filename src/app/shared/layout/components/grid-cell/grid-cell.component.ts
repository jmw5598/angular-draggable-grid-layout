import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { GridCellColSpan, GridCellRowSpan } from '../../models/grid-cell-spans.type';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCellComponent implements OnInit {
  private _colSpancClassPrefixes: string[] = 
    ['grid-cell-xs', 'grid-cell-sm', 'grid-cell-md', 'grid-cell-lg', 'grid-cell-xl', 'grid-cell-xxl'];

  @Input()
  public colSpans: GridCellColSpan[] = [3];

  // Create multiple inputs for each breakpoint as an alternate??
  // Maybe remove completely.

  @Input()
  public rowSpan: GridCellRowSpan | null = null;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this._configureCellSpan();
  }

  private _configureCellSpan(): void {
    const colClasses: string[] = this._colSpancClassPrefixes?.map((prefix, index) => {
        return prefix && this.colSpans[index] 
          ? `${prefix}-${this.colSpans[index]}`
          : '';
      })?.filter(c => c.length) || [];

    this.el.nativeElement.classList.add(...colClasses);

    if (this.rowSpan) {
      this.el.nativeElement.style.gridRow = `auto`;
    } else {
      this.el.nativeElement.style.gridRow = `span ${this.rowSpan || 1}`;
    }
  }
}
