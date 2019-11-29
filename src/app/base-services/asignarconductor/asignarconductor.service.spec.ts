import { TestBed } from '@angular/core/testing';

import { AsignarconductorService } from './asignarconductor.service';

describe('AsignarconductorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignarconductorService = TestBed.get(AsignarconductorService);
    expect(service).toBeTruthy();
  });
});
