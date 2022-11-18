import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseHNudgeAmountInputComponent } from './edge-chase-h-nudge-amount-input.component';

describe('EdgeChaseHNudgeAmountInputComponent', () => {
  let component: EdgeChaseHNudgeAmountInputComponent;
  let fixture: ComponentFixture<EdgeChaseHNudgeAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeChaseHNudgeAmountInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeChaseHNudgeAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
