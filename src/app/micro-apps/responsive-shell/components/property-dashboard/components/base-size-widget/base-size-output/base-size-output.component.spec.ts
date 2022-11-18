import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeOutputComponent } from './base-size-output.component';

describe('BaseSizeOutputComponent', () => {
  let component: BaseSizeOutputComponent;
  let fixture: ComponentFixture<BaseSizeOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSizeOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
