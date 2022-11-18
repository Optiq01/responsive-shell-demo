import { TestBed } from '@angular/core/testing';

import { VariationDemoService } from './variation-demo.service';

describe('VariationDemoService', () => {
  let service: VariationDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariationDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
