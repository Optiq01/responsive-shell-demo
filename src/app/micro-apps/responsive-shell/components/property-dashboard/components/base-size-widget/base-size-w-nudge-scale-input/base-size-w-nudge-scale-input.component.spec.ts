import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeWNudgeScaleInputComponent } from './base-size-w-nudge-scale-input.component';

describe('BaseSizeWNudgeScaleInputComponent', () => {
  let component: BaseSizeWNudgeScaleInputComponent;
  let fixture: ComponentFixture<BaseSizeWNudgeScaleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSizeWNudgeScaleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeWNudgeScaleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
