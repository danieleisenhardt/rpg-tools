import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackVsAverageSquaredComponent } from './attack-vs-average-squared.component';

describe('AttackVsAverageSquaredComponent', () => {
  let component: AttackVsAverageSquaredComponent;
  let fixture: ComponentFixture<AttackVsAverageSquaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackVsAverageSquaredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackVsAverageSquaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
