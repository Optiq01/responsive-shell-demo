import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkHSpeedInputComponent } from './stretch-shrink-h-speed-input.component';

describe('StretchShrinkHSpeedInputComponent', () => {
  let component: StretchShrinkHSpeedInputComponent;
  let fixture: ComponentFixture<StretchShrinkHSpeedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchShrinkHSpeedInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchShrinkHSpeedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
