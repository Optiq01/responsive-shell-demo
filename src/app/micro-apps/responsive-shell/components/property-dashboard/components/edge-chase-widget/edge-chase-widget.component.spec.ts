import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseWidgetComponent } from './edge-chase-widget.component';

describe('EdgeChaseWidgetComponent', () => {
  let component: EdgeChaseWidgetComponent;
  let fixture: ComponentFixture<EdgeChaseWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeChaseWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeChaseWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
