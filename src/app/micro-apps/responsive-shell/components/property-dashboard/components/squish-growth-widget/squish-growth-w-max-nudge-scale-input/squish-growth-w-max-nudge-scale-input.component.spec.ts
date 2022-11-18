import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthWMaxNudgeScaleInputComponent } from './squish-growth-w-max-nudge-scale-input.component';

describe('SquishGrowthWMaxNudgeScaleInputComponent', () => {
  let component: SquishGrowthWMaxNudgeScaleInputComponent;
  let fixture: ComponentFixture<SquishGrowthWMaxNudgeScaleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthWMaxNudgeScaleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthWMaxNudgeScaleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
