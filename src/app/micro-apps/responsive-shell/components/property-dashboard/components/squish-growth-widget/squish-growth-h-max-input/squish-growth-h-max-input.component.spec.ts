import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthHMaxInputComponent } from './squish-growth-h-max-input.component';

describe('SquishGrowthHMaxInputComponent', () => {
  let component: SquishGrowthHMaxInputComponent;
  let fixture: ComponentFixture<SquishGrowthHMaxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthHMaxInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthHMaxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
