import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthHMaxNudgeScaleInputComponent } from './squish-growth-h-max-nudge-scale-input.component';

describe('SquishGrowthHMaxNudgeScaleInputComponent', () => {
  let component: SquishGrowthHMaxNudgeScaleInputComponent;
  let fixture: ComponentFixture<SquishGrowthHMaxNudgeScaleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthHMaxNudgeScaleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthHMaxNudgeScaleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
