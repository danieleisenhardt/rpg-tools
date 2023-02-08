import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomVsRandomComponent } from './random-vs-random.component';

describe('RandomVsRandomComponent', () => {
  let component: RandomVsRandomComponent;
  let fixture: ComponentFixture<RandomVsRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomVsRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomVsRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
