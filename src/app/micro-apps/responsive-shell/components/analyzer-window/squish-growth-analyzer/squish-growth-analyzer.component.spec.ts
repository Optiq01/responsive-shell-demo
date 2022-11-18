import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthAnalyzerComponent } from './squish-growth-analyzer.component';

describe('SquishGrowthAnalyzerComponent', () => {
  let component: SquishGrowthAnalyzerComponent;
  let fixture: ComponentFixture<SquishGrowthAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquishGrowthAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishGrowthAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
