import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkWMinInputComponent } from './stretch-shrink-w-min-input.component';

describe('StretchShrinkWMinInputComponent', () => {
  let component: StretchShrinkWMinInputComponent;
  let fixture: ComponentFixture<StretchShrinkWMinInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchShrinkWMinInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchShrinkWMinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
