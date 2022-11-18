import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringTapePageComponent } from './measuring-tape-page.component';

describe('MeasuringTapePageComponent', () => {
  let component: MeasuringTapePageComponent;
  let fixture: ComponentFixture<MeasuringTapePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuringTapePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuringTapePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
