import { TestBed } from '@angular/core/testing';

import { BettingService } from './betting.service';

describe('BettingService', () => {
  let service: BettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
