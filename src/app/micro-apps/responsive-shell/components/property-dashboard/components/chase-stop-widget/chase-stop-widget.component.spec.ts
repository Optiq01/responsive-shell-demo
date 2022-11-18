import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseStopWidgetComponent } from './chase-stop-widget.component';

describe('ChaseStopWidgetComponent', () => {
  let component: ChaseStopWidgetComponent;
  let fixture: ComponentFixture<ChaseStopWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaseStopWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseStopWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
