import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedIntroPageComponent } from './getting-started-intro-page.component';

describe('GettingStartedIntroPageComponent', () => {
  let component: GettingStartedIntroPageComponent;
  let fixture: ComponentFixture<GettingStartedIntroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingStartedIntroPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedIntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
