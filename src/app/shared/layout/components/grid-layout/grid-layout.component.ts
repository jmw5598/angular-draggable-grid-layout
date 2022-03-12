import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridLayoutComponent implements OnInit {
  @Input()
  public cellGap: number = 16;

  constructor() { }

  ngOnInit(): void {
  }

}
