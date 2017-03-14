import { TestBed, inject } from '@angular/core/testing';

import { DatabaBaseService } from './databa-base.service';

describe('DatabaBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaBaseService]
    });
  });

  it('should ...', inject([DatabaBaseService], (service: DatabaBaseService) => {
    expect(service).toBeTruthy();
  }));
});
