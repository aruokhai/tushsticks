import { TestBed } from '@angular/core/testing';

import { GetAllMealsResolverService } from './get-all-meals-resolver.service';

describe('GetAllMealsResolverService', () => {
  let service: GetAllMealsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllMealsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
