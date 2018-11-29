import { TestBed } from '@angular/core/testing';

import { WebtokenService } from './webtoken.service';

describe('WebtokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebtokenService = TestBed.get(WebtokenService);
    expect(service).toBeTruthy();
  });
});
