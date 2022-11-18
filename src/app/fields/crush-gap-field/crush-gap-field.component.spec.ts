import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushGapFieldComponent } from './crush-gap-field.component';

describe('CrushGapFieldComponent', () => {
  let component: CrushGapFieldComponent;
  let fixture: ComponentFixture<CrushGapFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrushGapFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrushGapFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
