import { TestBed, async, inject } from '@angular/core/testing';

import {nologinGuard } from '../guards/nologin.guard';

describe('NologinGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [nologinGuard]
    });
  });

  it('should ...', inject([nologinGuard], (guard: nologinGuard) => {
    expect(guard).toBeTruthy();
  }));
});
