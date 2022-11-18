import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSpeedComponent } from './font-speed.component';

describe('FontSpeedComponent', () => {
  let component: FontSpeedComponent;
  let fixture: ComponentFixture<FontSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
