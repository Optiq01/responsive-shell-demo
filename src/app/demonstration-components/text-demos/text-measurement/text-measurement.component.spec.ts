import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMeasurementComponent } from './text-measurement.component';

describe('TextMeasurementComponent', () => {
  let component: TextMeasurementComponent;
  let fixture: ComponentFixture<TextMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMeasurementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
