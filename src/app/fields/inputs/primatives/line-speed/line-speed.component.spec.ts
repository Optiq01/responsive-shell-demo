import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSpeedComponent } from './line-speed.component';

describe('LineSpeedComponent', () => {
  let component: LineSpeedComponent;
  let fixture: ComponentFixture<LineSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
