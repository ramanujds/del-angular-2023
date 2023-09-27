import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { appDeactivateRouteGuard } from './app-deactivate-route.guard';

describe('appDeactivateRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => appDeactivateRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
