import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseStopWNudgeScaleInputComponent } from './chase-stop-w-nudge-scale-input.component';

describe('ChaseStopWNudgeScaleInputComponent', () => {
  let component: ChaseStopWNudgeScaleInputComponent;
  let fixture: ComponentFixture<ChaseStopWNudgeScaleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaseStopWNudgeScaleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseStopWNudgeScaleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
