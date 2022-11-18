import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizePageComponent } from './font-size-page.component';

describe('FontSizePageComponent', () => {
  let component: FontSizePageComponent;
  let fixture: ComponentFixture<FontSizePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSizePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
