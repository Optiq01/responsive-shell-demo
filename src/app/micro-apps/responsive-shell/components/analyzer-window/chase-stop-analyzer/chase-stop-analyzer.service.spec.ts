import { TestBed } from '@angular/core/testing';

import { ChaseStopAnalyzerService } from './chase-stop-analyzer.service';

describe('ChaseStopAnalyzerService', () => {
  let service: ChaseStopAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaseStopAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
