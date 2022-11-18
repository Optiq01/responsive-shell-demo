import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeWNudgeAmountInputComponent } from './base-size-w-nudge-amount-input.component';

describe('BaseSizeWNudgeAmountComponent', () => {
  let component: BaseSizeWNudgeAmountInputComponent;
  let fixture: ComponentFixture<BaseSizeWNudgeAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSizeWNudgeAmountInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeWNudgeAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
