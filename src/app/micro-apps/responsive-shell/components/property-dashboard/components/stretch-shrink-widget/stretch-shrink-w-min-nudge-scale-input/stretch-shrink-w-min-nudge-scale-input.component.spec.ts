import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkWMinNudgeScaleInputComponent } from './stretch-shrink-w-min-nudge-scale-input.component';

describe('StretchShrinkWMinNudgeScaleInputComponent', () => {
  let component: StretchShrinkWMinNudgeScaleInputComponent;
  let fixture: ComponentFixture<StretchShrinkWMinNudgeScaleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchShrinkWMinNudgeScaleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchShrinkWMinNudgeScaleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
