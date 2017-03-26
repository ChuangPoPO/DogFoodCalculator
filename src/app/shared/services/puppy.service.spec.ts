import { TestBed, inject } from '@angular/core/testing';

import { RawLessOneYearService } from './raw-less-one-year.service';

describe('RawLessOneYearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RawLessOneYearService]
    });
  });

  it('should ...', inject([RawLessOneYearService], (service: RawLessOneYearService) => {
    expect(service).toBeTruthy();
  }));
});
