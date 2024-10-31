import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, shareReplay, tap } from 'rxjs';
import { AUTHENTICATED } from '../interceptors/auth.interceptor';
import moment from 'moment';
import { User } from '../../modules/user/user.interface';

interface UserToken extends Partial<User> {
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private helper;

  constructor(private http: HttpClient) {
    this.helper = new JwtHelperService();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !this.helper.isTokenExpired(token);
  }

  public login(identifier: string, password: string) {
    console.log('Login function called.');
    return this.http
      .post<{ access_token: string }>('/login', { identifier, password })
      .pipe(tap((res) => this.setSession(res)));
  }

  private setSession(res: { access_token: string }) {
    const { access_token } = res;
    const { exp } = this.helper.decodeToken<UserToken>(access_token)!;
    const expiresAt = moment().add(exp, `s`);

    localStorage.setItem('token', access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

  public getAuthedUser(): Partial<User> | null {
    return this.helper.decodeToken(this.getAuthToken()!);
  }

  public getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }
}
