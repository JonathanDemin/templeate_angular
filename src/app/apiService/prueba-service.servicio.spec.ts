import { TestBed } from '@angular/core/testing';

import { PruebaServiceService } from './prueba-service.servicio';

describe('PruebaServiceService', () => {
  let service: PruebaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
