import {
  HttpContextToken,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const AUTHENTICATED = new HttpContextToken<boolean>(() => true);

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  if (req.context.get(AUTHENTICATED)) {
    // Inject the current `AuthService` and use it to get an authentication token:
    const authToken = localStorage.getItem('id_token');
    if (authToken) {
      // Clone the request to add the authentication header.
      const newReq = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${authToken}`),
      });
      return next(newReq);
    }
  }
  return next(req);
}
