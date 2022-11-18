import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigClassIntroPageComponent } from './config-class-intro-page.component';

describe('ConfigClassIntroPageComponent', () => {
  let component: ConfigClassIntroPageComponent;
  let fixture: ComponentFixture<ConfigClassIntroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigClassIntroPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigClassIntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
