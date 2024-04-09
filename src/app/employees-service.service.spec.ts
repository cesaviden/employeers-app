import { TestBed } from '@angular/core/testing';

import { employeesServiceService } from './employees-service.service';

describe('employeesServiceService', () => {
  let service: employeesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(employeesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
