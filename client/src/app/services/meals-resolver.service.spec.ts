import { TestBed } from '@angular/core/testing';

import { MealsResolverService } from './meals-resolver.service';

describe('MealsResolverService', () => {
  let service: MealsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
