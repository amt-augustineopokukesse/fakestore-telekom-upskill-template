import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('token');

  if (token) {
    return true;
  } else {
    window.location.href = '?redirect=' + state.url;
    return false;
  }
};
