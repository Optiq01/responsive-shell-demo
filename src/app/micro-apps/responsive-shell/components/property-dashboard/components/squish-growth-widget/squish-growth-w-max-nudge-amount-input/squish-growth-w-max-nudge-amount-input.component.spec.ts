import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthWMaxNudgeAmountInputComponent } from './squish-growth-w-max-nudge-amount-input.component';

describe('SquishGrowthWMaxNudgeAmountInputComponent', () => {
  let component: SquishGrowthWMaxNudgeAmountInputComponent;
  let fixture: ComponentFixture<SquishGrowthWMaxNudgeAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthWMaxNudgeAmountInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthWMaxNudgeAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
