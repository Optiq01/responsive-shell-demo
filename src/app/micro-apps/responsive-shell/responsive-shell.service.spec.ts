import { TestBed } from '@angular/core/testing';

import { ResponsiveShellService } from './responsive-shell.service';

describe('ResponsiveShellService', () => {
  let service: ResponsiveShellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveShellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
