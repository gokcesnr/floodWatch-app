import { TestBed } from '@angular/core/testing';

import { PastFloodTableService } from './past-flood-table.service';

describe('PastFloodTableService', () => {
  let service: PastFloodTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastFloodTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
