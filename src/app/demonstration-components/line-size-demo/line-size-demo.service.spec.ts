import { TestBed } from '@angular/core/testing';

import { LineSizeDemoService } from './line-size-demo.service';

describe('LineSizeDemoService', () => {
  let service: LineSizeDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineSizeDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
