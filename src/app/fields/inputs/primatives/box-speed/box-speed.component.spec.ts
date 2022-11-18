import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSpeedComponent } from './box-speed.component';

describe('BoxSpeedComponent', () => {
  let component: BoxSpeedComponent;
  let fixture: ComponentFixture<BoxSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
