import { TestBed } from '@angular/core/testing';

import { TransfereciaService } from './transfer.service';

describe('TransfereciaService', () => {
  let service: TransfereciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfereciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
