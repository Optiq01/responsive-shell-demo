import { TestBed } from '@angular/core/testing';

import { SvgPhotoComponentService } from './svg-photo-component.service';

describe('SvgPhotoComponentService', () => {
  let service: SvgPhotoComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgPhotoComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
