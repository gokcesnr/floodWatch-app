import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodDashboardComponent } from './flood-dashboard.component';

describe('FloodDashboardComponent', () => {
  let component: FloodDashboardComponent;
  let fixture: ComponentFixture<FloodDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloodDashboardComponent]
    });
    fixture = TestBed.createComponent(FloodDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
