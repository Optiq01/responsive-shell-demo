import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NudgeAmountComponent } from './nudge-amount.component';

describe('NudgeAmountComponent', () => {
  let component: NudgeAmountComponent;
  let fixture: ComponentFixture<NudgeAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NudgeAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NudgeAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
