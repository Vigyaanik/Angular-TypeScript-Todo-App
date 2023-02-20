import { TestBed } from '@angular/core/testing';

import { UsersCheckService } from './users-check.service';

describe('UsersCheckService', () => {
  let service: UsersCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
