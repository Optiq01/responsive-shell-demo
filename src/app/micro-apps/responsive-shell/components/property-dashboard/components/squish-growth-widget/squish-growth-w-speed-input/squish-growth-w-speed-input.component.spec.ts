import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthWSpeedInputComponent } from './squish-growth-w-speed-input.component';

describe('SquishGrowthWSpeedInputComponent', () => {
  let component: SquishGrowthWSpeedInputComponent;
  let fixture: ComponentFixture<SquishGrowthWSpeedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthWSpeedInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthWSpeedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
