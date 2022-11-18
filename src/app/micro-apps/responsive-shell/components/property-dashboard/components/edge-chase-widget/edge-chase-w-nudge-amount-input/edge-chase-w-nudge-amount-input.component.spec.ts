import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseWNudgeAmountInputComponent } from './edge-chase-w-nudge-amount-input.component';

describe('EdgeChaseWNudgeAmountInputComponent', () => {
  let component: EdgeChaseWNudgeAmountInputComponent;
  let fixture: ComponentFixture<EdgeChaseWNudgeAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeChaseWNudgeAmountInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeChaseWNudgeAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
