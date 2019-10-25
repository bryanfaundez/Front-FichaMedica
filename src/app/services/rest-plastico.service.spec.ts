import { TestBed } from '@angular/core/testing';

import { RestPlasticoService } from './rest-plastico.service';

describe('RestPlasticoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestPlasticoService = TestBed.get(RestPlasticoService);
    expect(service).toBeTruthy();
  });
});
