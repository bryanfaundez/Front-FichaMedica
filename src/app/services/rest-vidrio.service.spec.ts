import { TestBed } from '@angular/core/testing';

import { RestVidrioService } from './rest-vidrio.service';

describe('RestVidrioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestVidrioService = TestBed.get(RestVidrioService);
    expect(service).toBeTruthy();
  });
});
