import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeDemoComponent } from './size-demo.component';

describe('SizeDemoComponent', () => {
  let component: SizeDemoComponent;
  let fixture: ComponentFixture<SizeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
