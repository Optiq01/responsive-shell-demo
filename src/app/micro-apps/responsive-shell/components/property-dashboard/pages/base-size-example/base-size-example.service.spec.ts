import { TestBed } from '@angular/core/testing';

import { BaseSizeExampleService } from './base-size-example.service';

describe('BaseSizeExampleService', () => {
  let service: BaseSizeExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSizeExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
