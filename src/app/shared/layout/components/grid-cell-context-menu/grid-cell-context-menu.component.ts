import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-cell-context-menu',
  templateUrl: './grid-cell-context-menu.component.html',
  styleUrls: ['./grid-cell-context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCellContextMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
