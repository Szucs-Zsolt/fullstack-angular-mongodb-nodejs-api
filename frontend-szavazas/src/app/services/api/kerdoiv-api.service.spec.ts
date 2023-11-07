import { TestBed } from '@angular/core/testing';

import { KerdoivAPIService } from './kerdoiv-api.service';

describe('KerdoivAPIService', () => {
  let service: KerdoivAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KerdoivAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
