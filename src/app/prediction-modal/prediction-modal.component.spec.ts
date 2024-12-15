import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionModalComponent } from './prediction-modal.component';

describe('PredictionModalComponent', () => {
  let component: PredictionModalComponent;
  let fixture: ComponentFixture<PredictionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictionModalComponent]
    });
    fixture = TestBed.createComponent(PredictionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
