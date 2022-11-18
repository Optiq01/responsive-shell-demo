import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeWInputComponent } from './base-size-w-input.component';

describe('BaseSizeInputComponent', () => {
  let component: BaseSizeWInputComponent;
  let fixture: ComponentFixture<BaseSizeWInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSizeWInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeWInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
