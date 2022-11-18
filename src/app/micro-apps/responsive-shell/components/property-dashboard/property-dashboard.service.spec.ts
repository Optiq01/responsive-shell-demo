import { TestBed } from '@angular/core/testing';

import { PropertyDashboardService } from './property-dashboard.service';

describe('PropertyDashboardService', () => {
  let service: PropertyDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
