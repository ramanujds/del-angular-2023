import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { appRouteGuard } from './app-route.guard';

describe('appRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => appRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
