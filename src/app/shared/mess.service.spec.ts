import { TestBed, inject } from '@angular/core/testing';

import { MessService } from './mess.service';

describe('MessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessService]
    });
  });

  it('should be created', inject([MessService], (service: MessService) => {
    expect(service).toBeTruthy();
  }));
});
