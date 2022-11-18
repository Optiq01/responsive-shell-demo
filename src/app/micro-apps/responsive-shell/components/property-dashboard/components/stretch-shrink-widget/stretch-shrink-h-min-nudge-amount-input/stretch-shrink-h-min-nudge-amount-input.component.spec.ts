import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkHMinNudgeAmountInputComponent } from './stretch-shrink-h-min-nudge-amount-input.component';

describe('StretchShrinkHMinNudgeAmountInputComponent', () => {
  let component: StretchShrinkHMinNudgeAmountInputComponent;
  let fixture: ComponentFixture<StretchShrinkHMinNudgeAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchShrinkHMinNudgeAmountInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchShrinkHMinNudgeAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
