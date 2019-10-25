import { TestBed } from '@angular/core/testing';

import { RestReciclajeService } from './rest-reciclaje.service';

describe('RestReciclajeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestReciclajeService = TestBed.get(RestReciclajeService);
    expect(service).toBeTruthy();
  });
});
