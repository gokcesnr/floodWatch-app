import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedPredictionComponent } from './searched-prediction.component';

describe('SearchedPredictionComponent', () => {
  let component: SearchedPredictionComponent;
  let fixture: ComponentFixture<SearchedPredictionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedPredictionComponent]
    });
    fixture = TestBed.createComponent(SearchedPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
