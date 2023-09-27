import { CanActivateFn } from '@angular/router';

export const appRouteGuard: CanActivateFn = (route, state) => {
  return false;
};
