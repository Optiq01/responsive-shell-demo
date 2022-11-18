import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseStopHNudgeScaleInputComponent } from './chase-stop-h-nudge-scale-input.component';

describe('ChaseStopHNudgeScaleInputComponent', () => {
  let component: ChaseStopHNudgeScaleInputComponent;
  let fixture: ComponentFixture<ChaseStopHNudgeScaleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaseStopHNudgeScaleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseStopHNudgeScaleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
