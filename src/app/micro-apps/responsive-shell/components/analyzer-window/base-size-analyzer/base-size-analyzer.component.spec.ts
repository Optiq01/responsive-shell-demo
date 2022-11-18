import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeAnalyzerComponent } from './base-size-analyzer.component';

describe('BaseSizeAnalyzerComponent', () => {
  let component: BaseSizeAnalyzerComponent;
  let fixture: ComponentFixture<BaseSizeAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSizeAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
