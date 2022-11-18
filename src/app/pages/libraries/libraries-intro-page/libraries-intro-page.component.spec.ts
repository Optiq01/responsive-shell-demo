import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesIntroPageComponent } from './libraries-intro-page.component';

describe('LibrariesIntroPageComponent', () => {
  let component: LibrariesIntroPageComponent;
  let fixture: ComponentFixture<LibrariesIntroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrariesIntroPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrariesIntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
