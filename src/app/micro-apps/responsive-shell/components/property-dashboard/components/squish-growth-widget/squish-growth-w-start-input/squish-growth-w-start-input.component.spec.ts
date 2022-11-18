import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthWStartInputComponent } from './squish-growth-w-start-input.component';

describe('SquishGrowthWStartInputComponent', () => {
  let component: SquishGrowthWStartInputComponent;
  let fixture: ComponentFixture<SquishGrowthWStartInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthWStartInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthWStartInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
