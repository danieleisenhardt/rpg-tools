import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitChanceComponent } from './hit-chance.component';

describe('HitChanceComponent', () => {
  let component: HitChanceComponent;
  let fixture: ComponentFixture<HitChanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitChanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitChanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
