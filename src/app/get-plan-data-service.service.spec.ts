import { TestBed } from '@angular/core/testing';

import { GetPlanDataServiceService } from './get-plan-data-service.service';

describe('GetPlanDataServiceService', () => {
  let service: GetPlanDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPlanDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
