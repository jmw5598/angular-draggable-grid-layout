import { TestBed } from '@angular/core/testing';

import { DragDropGridLayoutService } from './drag-drop-grid-layout.service';

describe('DragDropGridLayoutService', () => {
  let service: DragDropGridLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragDropGridLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
