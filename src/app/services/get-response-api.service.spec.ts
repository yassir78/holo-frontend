import { TestBed } from '@angular/core/testing';

import { GetResponseApiService } from './get-response-api.service';

describe('GetResponseApiService', () => {
  let service: GetResponseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetResponseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
