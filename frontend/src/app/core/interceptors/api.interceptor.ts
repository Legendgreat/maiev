import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export function apiInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const apiUrl = environment.apiUrl;
  req = req.clone({
    url: apiUrl + req.url,
  });
  return next(req);
}
