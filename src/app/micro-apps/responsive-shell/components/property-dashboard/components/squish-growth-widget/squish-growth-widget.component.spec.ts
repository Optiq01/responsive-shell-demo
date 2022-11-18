import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthWidgetComponent } from './squish-growth-widget.component';

describe('SquishGrowthWidgetComponent', () => {
  let component: SquishGrowthWidgetComponent;
  let fixture: ComponentFixture<SquishGrowthWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
