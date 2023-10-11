import { TestBed } from '@angular/core/testing';

import { RealEstateTypeService } from './real-estate-type.service';

describe('RealEstateTypeService', () => {
  let service: RealEstateTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstateTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
