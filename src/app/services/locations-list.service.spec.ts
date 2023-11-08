import { TestBed } from '@angular/core/testing';

import { LocationsListService } from './locations-list.service';

describe('LocationsListService', () => {
  let service: LocationsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
