import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseAnalyzerComponent } from './edge-chase-analyzer.component';

describe('EdgeChaseAnalyzerComponent', () => {
  let component: EdgeChaseAnalyzerComponent;
  let fixture: ComponentFixture<EdgeChaseAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeChaseAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeChaseAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
