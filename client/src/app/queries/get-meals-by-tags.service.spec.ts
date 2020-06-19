import { TestBed } from '@angular/core/testing';

import { GetMealsByTagsService } from './get-meals-by-tags.service';

describe('GetMealsByTagsService', () => {
  let service: GetMealsByTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMealsByTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
