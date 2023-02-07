import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivePointsRisingCostsComponent } from './five-points-rising-costs.component';

describe('FivePointsRisingCostsComponent', () => {
  let component: FivePointsRisingCostsComponent;
  let fixture: ComponentFixture<FivePointsRisingCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivePointsRisingCostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivePointsRisingCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
