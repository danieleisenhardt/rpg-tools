import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradualLearnByDoingComponent } from './gradual-learn-by-doing.component';

describe('GradualLearnByDoingComponent', () => {
  let component: GradualLearnByDoingComponent;
  let fixture: ComponentFixture<GradualLearnByDoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradualLearnByDoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradualLearnByDoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
