import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeBoxComponent } from './base-size-box.component';

describe('BaseSizeBoxComponent', () => {
  let component: BaseSizeBoxComponent;
  let fixture: ComponentFixture<BaseSizeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSizeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
