import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const auth = this.auth.isAuthenticated();
    if (!auth) {
      this.router.navigate(['login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
    return true;
  }
}
