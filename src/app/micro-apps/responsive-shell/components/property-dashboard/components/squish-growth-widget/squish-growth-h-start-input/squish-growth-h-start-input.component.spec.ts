import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthHStartInputComponent } from './squish-growth-h-start-input.component';

describe('SquishGrowthHStartInputComponent', () => {
  let component: SquishGrowthHStartInputComponent;
  let fixture: ComponentFixture<SquishGrowthHStartInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthHStartInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthHStartInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
