import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkWMinNudgeAmountInputComponent } from './stretch-shrink-w-min-nudge-amount-input.component';

describe('StretchShrinkWMinNudgeAmountInputComponent', () => {
  let component: StretchShrinkWMinNudgeAmountInputComponent;
  let fixture: ComponentFixture<StretchShrinkWMinNudgeAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchShrinkWMinNudgeAmountInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchShrinkWMinNudgeAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
