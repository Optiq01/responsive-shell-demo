import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushGapHInputComponent } from './crush-gap-h-input.component';

describe('CrushGapHInputComponent', () => {
  let component: CrushGapHInputComponent;
  let fixture: ComponentFixture<CrushGapHInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrushGapHInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrushGapHInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
