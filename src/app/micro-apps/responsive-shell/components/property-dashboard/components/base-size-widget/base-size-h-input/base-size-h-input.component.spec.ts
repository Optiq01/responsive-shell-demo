import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeHInputComponent } from './base-size-h-input.component';

describe('BaseSizeHComponent', () => {
  let component: BaseSizeHInputComponent;
  let fixture: ComponentFixture<BaseSizeHInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSizeHInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeHInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
