import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthWMaxInputComponent } from './squish-growth-w-max-input.component';

describe('SquishGrowthWMaxInputComponent', () => {
  let component: SquishGrowthWMaxInputComponent;
  let fixture: ComponentFixture<SquishGrowthWMaxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthWMaxInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthWMaxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
