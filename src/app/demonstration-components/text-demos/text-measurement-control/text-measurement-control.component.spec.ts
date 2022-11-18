import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMeasurementControlComponent } from './text-measurement-control.component';

describe('TextMeasurementControlComponent', () => {
  let component: TextMeasurementControlComponent;
  let fixture: ComponentFixture<TextMeasurementControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMeasurementControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMeasurementControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
