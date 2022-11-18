import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDimensionReadoutComponent } from './screen-dimension-readout.component';

describe('ScreenDimensionReadoutComponent', () => {
  let component: ScreenDimensionReadoutComponent;
  let fixture: ComponentFixture<ScreenDimensionReadoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenDimensionReadoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenDimensionReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
