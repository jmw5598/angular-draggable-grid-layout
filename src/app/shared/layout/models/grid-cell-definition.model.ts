import { Type } from "@angular/core";

export interface GridCellDefinition {
  component: Type<any> | null | undefined,
  colSpan: number | string,
  rowSpan: number | string
}
