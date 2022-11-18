import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkWSpeedInputComponent } from './stretch-shrink-w-speed-input.component';

describe('StretchShrinkWSpeedInputComponent', () => {
  let component: StretchShrinkWSpeedInputComponent;
  let fixture: ComponentFixture<StretchShrinkWSpeedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchShrinkWSpeedInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchShrinkWSpeedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
