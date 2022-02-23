import { TestBed } from '@angular/core/testing';

import { AlertAfService } from './alert-af.service';

describe('AlertAfService', () => {
  let service: AlertAfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertAfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
