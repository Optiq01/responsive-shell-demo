import { TestBed } from '@angular/core/testing';

import { SizeDemoControlService } from './size-demo-control.service';

describe('SizeDemoControlService', () => {
  let service: SizeDemoControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizeDemoControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
