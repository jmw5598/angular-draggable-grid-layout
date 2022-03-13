import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCellExampleComponent } from './grid-cell-example.component';

describe('GridCellExampleComponent', () => {
  let component: GridCellExampleComponent;
  let fixture: ComponentFixture<GridCellExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCellExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCellExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
