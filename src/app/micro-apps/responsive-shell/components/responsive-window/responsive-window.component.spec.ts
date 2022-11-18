import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveWindowComponent } from './responsive-window.component';

describe('ResponsiveWindowComponent', () => {
  let component: ResponsiveWindowComponent;
  let fixture: ComponentFixture<ResponsiveWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
