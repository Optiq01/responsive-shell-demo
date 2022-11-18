import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeWidgetComponent } from './base-size-widget.component';

describe('BaseSizeWidgetComponent', () => {
  let component: BaseSizeWidgetComponent;
  let fixture: ComponentFixture<BaseSizeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSizeWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
