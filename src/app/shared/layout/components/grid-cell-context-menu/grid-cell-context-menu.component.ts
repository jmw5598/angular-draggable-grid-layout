import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-cell-context-menu',
  templateUrl: './grid-cell-context-menu.component.html',
  styleUrls: ['./grid-cell-context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCellContextMenuComponent implements OnInit {
  @Input()
  public colSpan: number = 1;

  @Input()
  public rowSpan: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
