import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastFloodTableComponent } from './past-flood-table.component';

describe('PastFloodTableComponent', () => {
  let component: PastFloodTableComponent;
  let fixture: ComponentFixture<PastFloodTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastFloodTableComponent]
    });
    fixture = TestBed.createComponent(PastFloodTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
