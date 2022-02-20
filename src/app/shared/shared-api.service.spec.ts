import { TestBed } from '@angular/core/testing';

import { SharedApiService } from './shared-api.service';

describe('SharedApiService', () => {
  let service: SharedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
