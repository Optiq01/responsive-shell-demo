import { TestBed } from '@angular/core/testing';

import { SizeDemoService } from './size-demo.service';

describe('SizeDemoService', () => {
  let service: SizeDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizeDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
