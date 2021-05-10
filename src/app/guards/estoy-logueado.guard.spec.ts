import { TestBed } from '@angular/core/testing';

import { EstoyLogueadoGuard } from './estoy-logueado.guard';

describe('EstoyLogueadoGuard', () => {
  let guard: EstoyLogueadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EstoyLogueadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
