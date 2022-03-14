import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import { GridCellComponent } from './components/grid-cell/grid-cell.component';
import { GridCellContextMenuComponent } from './components/grid-cell-context-menu/grid-cell-context-menu.component';
import { DragDropGridLayoutComponent } from './components/drag-drop-grid-layout/drag-drop-grid-layout.component';

@NgModule({
  declarations: [
    GridLayoutComponent,
    GridCellComponent,
    GridCellContextMenuComponent,
    DragDropGridLayoutComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    GridLayoutComponent,
    GridCellComponent,
    GridCellContextMenuComponent,
    DragDropGridLayoutComponent
  ]
})
export class LayoutModule { }
