import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenEndedDice2d6Component } from './open-ended-dice2d6.component';

describe('OpenEndedDice2d6Component', () => {
  let component: OpenEndedDice2d6Component;
  let fixture: ComponentFixture<OpenEndedDice2d6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenEndedDice2d6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenEndedDice2d6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
