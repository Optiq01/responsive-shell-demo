import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthHMaxNudgeAmountInputComponent } from './squish-growth-h-max-nudge-amount-input.component';

describe('SquishGrowthHMaxNudgeAmountInputComponent', () => {
  let component: SquishGrowthHMaxNudgeAmountInputComponent;
  let fixture: ComponentFixture<SquishGrowthHMaxNudgeAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthHMaxNudgeAmountInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthHMaxNudgeAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
