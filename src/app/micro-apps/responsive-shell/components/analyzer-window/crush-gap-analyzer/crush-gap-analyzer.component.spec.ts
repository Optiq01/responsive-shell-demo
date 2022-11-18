import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushGapAnalyzerComponent } from './crush-gap-analyzer.component';

describe('CrushGapAnalyzerComponent', () => {
  let component: CrushGapAnalyzerComponent;
  let fixture: ComponentFixture<CrushGapAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrushGapAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrushGapAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
