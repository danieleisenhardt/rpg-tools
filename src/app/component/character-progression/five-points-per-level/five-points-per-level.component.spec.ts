import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivePointsPerLevelComponent } from './five-points-per-level.component';

describe('FivePointsPerLevelComponent', () => {
  let component: FivePointsPerLevelComponent;
  let fixture: ComponentFixture<FivePointsPerLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivePointsPerLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivePointsPerLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
