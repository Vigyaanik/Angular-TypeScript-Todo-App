import { TestBed } from '@angular/core/testing';

import { DeleteJobService } from './delete-job.service';

describe('DeleteJobService', () => {
  let service: DeleteJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
