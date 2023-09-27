import { CanActivateFn } from '@angular/router';

export const appDeactivateRouteGuard: CanActivateFn = (route, state) => {
  return false;
};
