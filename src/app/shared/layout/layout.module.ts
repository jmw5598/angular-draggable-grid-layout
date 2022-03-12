import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import { GridCellComponent } from './components/grid-cell/grid-cell.component';
import { GridCellContextMenuComponent } from './components/grid-cell-context-menu/grid-cell-context-menu.component';



@NgModule({
  declarations: [
    GridLayoutComponent,
    GridCellComponent,
    GridCellContextMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridLayoutComponent,
    GridCellComponent,
    GridCellContextMenuComponent
  ]
})
export class LayoutModule { }
