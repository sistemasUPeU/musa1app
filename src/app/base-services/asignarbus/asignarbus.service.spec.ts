import { TestBed } from '@angular/core/testing';

import { AsignarbusService } from './asignarbus.service';

describe('AsignarbusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignarbusService = TestBed.get(AsignarbusService);
    expect(service).toBeTruthy();
  });
});
