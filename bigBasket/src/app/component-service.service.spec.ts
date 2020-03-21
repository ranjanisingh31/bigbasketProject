import { TestBed } from '@angular/core/testing';

import { ComponentServiceService } from './component-service.service';

describe('ComponentServiceService', () => {
  let service: ComponentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
