import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSizeVariantComponent } from './box-size-variant.component';

describe('BoxSizeVariantComponent', () => {
  let component: BoxSizeVariantComponent;
  let fixture: ComponentFixture<BoxSizeVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSizeVariantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSizeVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
