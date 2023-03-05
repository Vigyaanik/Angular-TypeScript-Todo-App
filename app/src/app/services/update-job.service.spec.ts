import { TestBed } from '@angular/core/testing';

import { UpdateJobService } from './update-job.service';

describe('UpdateJobService', () => {
  let service: UpdateJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
