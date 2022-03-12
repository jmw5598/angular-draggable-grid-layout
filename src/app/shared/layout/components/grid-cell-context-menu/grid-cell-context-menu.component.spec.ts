import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCellContextMenuComponent } from './grid-cell-context-menu.component';

describe('GridCellContextMenuComponent', () => {
  let component: GridCellContextMenuComponent;
  let fixture: ComponentFixture<GridCellContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCellContextMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCellContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
