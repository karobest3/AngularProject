import { TestBed } from '@angular/core/testing';

import { LoaderLibService } from './loader-lib.service';

describe('LoaderLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderLibService = TestBed.get(LoaderLibService);
    expect(service).toBeTruthy();
  });
});
