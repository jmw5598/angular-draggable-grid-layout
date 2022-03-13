import { Type } from "@angular/core";
import { GridCellColSpan, GridCellRowSpan } from "./grid-cell-spans.type";

export interface GridCellDefinition {
  component: Type<any> | null | undefined,
  colSpan: GridCellColSpan,
  rowSpan: GridCellRowSpan
}
