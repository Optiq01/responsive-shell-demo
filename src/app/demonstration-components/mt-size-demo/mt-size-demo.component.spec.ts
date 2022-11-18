import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtSizeDemoComponent } from './mt-size-demo.component';

describe('MtSizeDemoComponent', () => {
  let component: MtSizeDemoComponent;
  let fixture: ComponentFixture<MtSizeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtSizeDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtSizeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
