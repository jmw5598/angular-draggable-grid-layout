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
        colSpan: 6,
        rowSpan: 3
      },
      {
        component: null,
        colSpan: 3,
        rowSpan: 1
      },
      {
        component: null,
        colSpan: 3,
        rowSpan: 1
      },
      {
        component: null,
        colSpan: 3,
        rowSpan: 1
      },
    ]
  }
}
