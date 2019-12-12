import { TestBed } from '@angular/core/testing';

import { FunaService } from './funa.service';

describe('FunaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunaService = TestBed.get(FunaService);
    expect(service).toBeTruthy();
  });
});
