import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseStopAnalyzerComponent } from './chase-stop-analyzer.component';

describe('ChaseStopAnalyzerComponent', () => {
  let component: ChaseStopAnalyzerComponent;
  let fixture: ComponentFixture<ChaseStopAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaseStopAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseStopAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
