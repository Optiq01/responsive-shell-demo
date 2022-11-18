import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushGapWidgetComponent } from './crush-gap-widget.component';

describe('CrushGapWidgetComponent', () => {
  let component: CrushGapWidgetComponent;
  let fixture: ComponentFixture<CrushGapWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrushGapWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrushGapWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
