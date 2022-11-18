import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationDemoComponent } from './variation-demo.component';

describe('VariationDemoComponent', () => {
  let component: VariationDemoComponent;
  let fixture: ComponentFixture<VariationDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariationDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
