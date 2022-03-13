import { Component, Input, OnInit } from '@angular/core';
import { GridLayoutDefinition } from '../../models/grid-layout-definition.model';

@Component({
  selector: 'app-drag-drop-grid-layout',
  templateUrl: './drag-drop-grid-layout.component.html',
  styleUrls: ['./drag-drop-grid-layout.component.scss']
})
export class DragDropGridLayoutComponent implements OnInit {
  @Input()
  public layoutDefinition: GridLayoutDefinition | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
