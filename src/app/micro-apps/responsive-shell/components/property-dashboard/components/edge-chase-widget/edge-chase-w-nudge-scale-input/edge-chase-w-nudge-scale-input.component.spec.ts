import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseWNudgeScaleInputComponent } from './edge-chase-w-nudge-scale-input.component';

describe('EdgeChaseWNudgeScaleInputComponent', () => {
  let component: EdgeChaseWNudgeScaleInputComponent;
  let fixture: ComponentFixture<EdgeChaseWNudgeScaleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeChaseWNudgeScaleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeChaseWNudgeScaleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
