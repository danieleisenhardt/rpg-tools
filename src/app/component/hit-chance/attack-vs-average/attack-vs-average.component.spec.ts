import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackVsAverageComponent } from './attack-vs-average.component';

describe('AttackVsAverageComponent', () => {
  let component: AttackVsAverageComponent;
  let fixture: ComponentFixture<AttackVsAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackVsAverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackVsAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
