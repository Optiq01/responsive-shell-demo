import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeDemoControlComponent } from './size-demo-control.component';

describe('SizeDemoControlComponent', () => {
  let component: SizeDemoControlComponent;
  let fixture: ComponentFixture<SizeDemoControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeDemoControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeDemoControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
