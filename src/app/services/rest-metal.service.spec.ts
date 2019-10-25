import { TestBed } from '@angular/core/testing';

import { RestMetalService } from './rest-metal.service';

describe('RestMetalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestMetalService = TestBed.get(RestMetalService);
    expect(service).toBeTruthy();
  });
});
