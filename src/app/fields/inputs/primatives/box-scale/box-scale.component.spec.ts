import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxScaleComponent } from './box-scale.component';

describe('BoxScaleComponent', () => {
  let component: BoxScaleComponent;
  let fixture: ComponentFixture<BoxScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
