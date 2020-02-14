import { TestBed } from '@angular/core/testing';

import { UploadFirebaseService } from './upload-firebase.service';

describe('UploadFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadFirebaseService = TestBed.get(UploadFirebaseService);
    expect(service).toBeTruthy();
  });
});
