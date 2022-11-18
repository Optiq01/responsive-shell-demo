import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirefoxPageComponent } from './firefox-page.component';

describe('FirefoxPageComponent', () => {
  let component: FirefoxPageComponent;
  let fixture: ComponentFixture<FirefoxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirefoxPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirefoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
