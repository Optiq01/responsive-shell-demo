import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeHNudgeAmountInputComponent } from './base-size-h-nudge-amount-input.component';

describe('BaseSizeHNudgeAmountInputComponent', () => {
  let component: BaseSizeHNudgeAmountInputComponent;
  let fixture: ComponentFixture<BaseSizeHNudgeAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSizeHNudgeAmountInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeHNudgeAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
