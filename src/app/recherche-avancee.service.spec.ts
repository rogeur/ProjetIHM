import { TestBed } from '@angular/core/testing';

import { RechercheAvanceeService } from './recherche-avancee.service';

describe('RechercheAvanceeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RechercheAvanceeService = TestBed.get(RechercheAvanceeService);
    expect(service).toBeTruthy();
  });
});
