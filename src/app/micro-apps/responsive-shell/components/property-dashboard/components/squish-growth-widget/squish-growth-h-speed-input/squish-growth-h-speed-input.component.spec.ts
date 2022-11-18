import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthHSpeedInputComponent } from './squish-growth-h-speed-input.component';

describe('SquishGrowthHSpeedInputComponent', () => {
  let component: SquishGrowthHSpeedInputComponent;
  let fixture: ComponentFixture<SquishGrowthHSpeedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthHSpeedInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthHSpeedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
