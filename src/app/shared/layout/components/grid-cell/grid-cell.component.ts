import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCellComponent implements OnInit {
  @Input()
  public colSpan: number | string = 3;

  @Input()
  public rowSpan: number | string = 1;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this._configureCellSpan();
  }

  private _configureCellSpan(): void {
    this.el.nativeElement.style.gridColumn = `span ${this.colSpan || 3}`;
    this.el.nativeElement.style.gridRow = `span ${this.rowSpan || 1}`;
  }
}
