import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSizeDemoComponent } from './text-size-demo.component';

describe('TextSizeDemoComponent', () => {
  let component: TextSizeDemoComponent;
  let fixture: ComponentFixture<TextSizeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSizeDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSizeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
