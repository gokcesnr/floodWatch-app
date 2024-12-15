import { TestBed } from '@angular/core/testing';

import { FutureFloodTableService } from './future-flood-table.service';

describe('FutureFloodTableService', () => {
  let service: FutureFloodTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutureFloodTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
