import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkHMinNudgeScaleInputComponent } from './stretch-shrink-h-min-nudge-scale-input.component';

describe('StretchShrinkHMinNudgeScaleInputComponent', () => {
  let component: StretchShrinkHMinNudgeScaleInputComponent;
  let fixture: ComponentFixture<StretchShrinkHMinNudgeScaleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchShrinkHMinNudgeScaleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchShrinkHMinNudgeScaleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
