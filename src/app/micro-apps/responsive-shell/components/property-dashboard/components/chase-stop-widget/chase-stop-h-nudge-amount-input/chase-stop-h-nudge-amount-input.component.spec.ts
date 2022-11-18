import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseStopHNudgeAmountInputComponent } from './chase-stop-h-nudge-amount-input.component';

describe('ChaseStopHNudgeAmountInputComponent', () => {
  let component: ChaseStopHNudgeAmountInputComponent;
  let fixture: ComponentFixture<ChaseStopHNudgeAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaseStopHNudgeAmountInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseStopHNudgeAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
