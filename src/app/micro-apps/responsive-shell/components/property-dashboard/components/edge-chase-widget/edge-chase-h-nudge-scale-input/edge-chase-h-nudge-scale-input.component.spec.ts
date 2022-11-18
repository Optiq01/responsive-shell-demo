import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseHNudgeScaleInputComponent } from './edge-chase-h-nudge-scale-input.component';

describe('EdgeChaseHNudgeScaleInputComponent', () => {
  let component: EdgeChaseHNudgeScaleInputComponent;
  let fixture: ComponentFixture<EdgeChaseHNudgeScaleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeChaseHNudgeScaleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeChaseHNudgeScaleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
