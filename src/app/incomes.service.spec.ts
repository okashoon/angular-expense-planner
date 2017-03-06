import { TestBed, inject } from '@angular/core/testing';

import { IncomesService } from './incomes.service';

describe('IncomesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncomesService]
    });
  });

  it('should ...', inject([IncomesService], (service: IncomesService) => {
    expect(service).toBeTruthy();
  }));
});
