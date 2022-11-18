import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkWidgetComponent } from './stretch-shrink-widget.component';

describe('StretchShrinkWidgetComponent', () => {
  let component: StretchShrinkWidgetComponent;
  let fixture: ComponentFixture<StretchShrinkWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchShrinkWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchShrinkWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
