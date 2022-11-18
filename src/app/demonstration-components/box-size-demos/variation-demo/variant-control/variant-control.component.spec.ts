import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantControlComponent } from './variant-control.component';

describe('VariantControlComponent', () => {
  let component: VariantControlComponent;
  let fixture: ComponentFixture<VariantControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
