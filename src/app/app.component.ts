import { Component } from '@angular/core';
import { GridCellExampleComponent } from './components/grid-cell-example/grid-cell-example.component';
import { GridLayoutDefinition, GridCellDefinition } from './shared/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public layoutDefinition: GridLayoutDefinition = {
    cells: [
      {
        component: GridCellExampleComponent,
        colSpans: [12, 12, 12, 12, 6, 6],
        rowSpan: null
      },
      {
        component: GridCellExampleComponent,
        colSpans: [12, 12, 12, 12, 3, 2],
        rowSpan: null
      },
      {
        component: null,
        colSpans: [12, 12, 12, 12, 3, 2],
        rowSpan: 2
      },
      {
        component: null,
        colSpans: [12, 12, 12, 12, 12 , 2],
        rowSpan: 2
      },
    ]
  }
}
