import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureFloodTableComponent } from './future-flood-table.component';

describe('FutureFloodTableComponent', () => {
  let component: FutureFloodTableComponent;
  let fixture: ComponentFixture<FutureFloodTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureFloodTableComponent]
    });
    fixture = TestBed.createComponent(FutureFloodTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
