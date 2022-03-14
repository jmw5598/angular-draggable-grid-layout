import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GridCellDefinition } from '../../models/grid-cell-definition.model';
import { GridLayoutDefinition } from '../../models/grid-layout-definition.model';
import { DragDropGridLayoutService } from './drag-drop-grid-layout.service';

@Component({
  selector: 'app-drag-drop-grid-layout',
  templateUrl: './drag-drop-grid-layout.component.html',
  styleUrls: ['./drag-drop-grid-layout.component.scss']
})
export class DragDropGridLayoutComponent implements OnInit {
  @Input()
  public layoutDefinition$: Observable<GridLayoutDefinition | null> = of(null);

  constructor(
    private _dragDropGridLayoutService: DragDropGridLayoutService
  ) { }

  ngOnInit(): void {
    this.layoutDefinition$ = this._dragDropGridLayoutService.onLayoutChanges();
  }

  public onDropCell(event: CdkDragDrop<GridCellDefinition[]>): void {
    console.log('dropped');
  }

}
