import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkHStartInputComponent } from './stretch-shrink-h-start-input.component';

describe('StretchShrinkHStartInputComponent', () => {
  let component: StretchShrinkHStartInputComponent;
  let fixture: ComponentFixture<StretchShrinkHStartInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchShrinkHStartInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchShrinkHStartInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
