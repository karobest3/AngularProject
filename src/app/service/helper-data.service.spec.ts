import { TestBed } from '@angular/core/testing';

import { HelperDataService } from './helper-data.service';

describe('HelperDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelperDataService = TestBed.get(HelperDataService);
    expect(service).toBeTruthy();
  });
});
