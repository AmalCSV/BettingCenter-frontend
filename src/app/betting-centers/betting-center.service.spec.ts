import { TestBed } from '@angular/core/testing';

import { BettingCenterService } from './betting-center.service';

describe('BettingCenterService', () => {
  let service: BettingCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BettingCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
