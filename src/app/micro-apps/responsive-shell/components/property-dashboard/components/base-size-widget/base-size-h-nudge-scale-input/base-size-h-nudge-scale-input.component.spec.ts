import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeHNudgeScaleInputComponent } from './base-size-h-nudge-scale-input.component';

describe('BaseSizeHNudgeScaleInputComponent', () => {
  let component: BaseSizeHNudgeScaleInputComponent;
  let fixture: ComponentFixture<BaseSizeHNudgeScaleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSizeHNudgeScaleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeHNudgeScaleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
