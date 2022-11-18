import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkHMinInputComponent } from './stretch-shrink-h-min-input.component';

describe('StretchShrinkHMinInputComponent', () => {
  let component: StretchShrinkHMinInputComponent;
  let fixture: ComponentFixture<StretchShrinkHMinInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchShrinkHMinInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchShrinkHMinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
