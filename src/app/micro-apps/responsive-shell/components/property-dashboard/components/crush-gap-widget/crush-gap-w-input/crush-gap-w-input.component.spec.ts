import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushGapWInputComponent } from './crush-gap-w-input.component';

describe('CrushGapWInputComponent', () => {
  let component: CrushGapWInputComponent;
  let fixture: ComponentFixture<CrushGapWInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrushGapWInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrushGapWInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
