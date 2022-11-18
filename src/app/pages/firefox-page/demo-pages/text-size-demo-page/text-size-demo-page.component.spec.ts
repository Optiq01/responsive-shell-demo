import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSizeDemoPageComponent } from './text-size-demo-page.component';

describe('TextSizeDemoPageComponent', () => {
  let component: TextSizeDemoPageComponent;
  let fixture: ComponentFixture<TextSizeDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSizeDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSizeDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
