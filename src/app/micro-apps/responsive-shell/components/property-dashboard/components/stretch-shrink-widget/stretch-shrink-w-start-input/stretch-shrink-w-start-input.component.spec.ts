import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkWStartInputComponent } from './stretch-shrink-w-start-input.component';

describe('StretchShrinkWStartInputComponent', () => {
  let component: StretchShrinkWStartInputComponent;
  let fixture: ComponentFixture<StretchShrinkWStartInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchShrinkWStartInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchShrinkWStartInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
