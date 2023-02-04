import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillVsD100Component } from './skill-vs-d100.component';

describe('SkillVsD100Component', () => {
  let component: SkillVsD100Component;
  let fixture: ComponentFixture<SkillVsD100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillVsD100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillVsD100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
