import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseStopWNudgeAmountInputComponent } from './chase-stop-w-nudge-amount-input.component';

describe('ChaseStopWNudgeAmountInputComponent', () => {
  let component: ChaseStopWNudgeAmountInputComponent;
  let fixture: ComponentFixture<ChaseStopWNudgeAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaseStopWNudgeAmountInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseStopWNudgeAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
