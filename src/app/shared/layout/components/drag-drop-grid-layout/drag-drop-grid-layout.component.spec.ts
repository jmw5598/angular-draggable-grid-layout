import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropGridLayoutComponent } from './drag-drop-grid-layout.component';

describe('DragDropGridLayoutComponent', () => {
  let component: DragDropGridLayoutComponent;
  let fixture: ComponentFixture<DragDropGridLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropGridLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
