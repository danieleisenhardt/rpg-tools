import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivePointsRestrictedComponent } from './five-points-restricted.component';

describe('FivePointsRestrictedComponent', () => {
  let component: FivePointsRestrictedComponent;
  let fixture: ComponentFixture<FivePointsRestrictedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivePointsRestrictedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivePointsRestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
