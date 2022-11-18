import { TestBed } from '@angular/core/testing';

import { SrcryStylesChannelService } from './srcry-styles-channel.service';

describe('SrcryStylesChannelService', () => {
  let service: SrcryStylesChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrcryStylesChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
