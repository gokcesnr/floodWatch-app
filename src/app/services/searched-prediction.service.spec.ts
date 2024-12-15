import { TestBed } from '@angular/core/testing';

import { SearchedPredictionService } from './searched-prediction.service';

describe('SearchedPredictionService', () => {
  let service: SearchedPredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchedPredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
