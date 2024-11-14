import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([apiInterceptor, authInterceptor]),
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withRouterConfig({ onSameUrlNavigation: 'reload' })),
    provideAnimationsAsync(),
    importProvidersFrom(
      NgxSkeletonLoaderModule.forRoot({
        animation: 'progress-dark',
        theme: {
          extendsFromRoot: true,
          backgroundColor: 'var(--mat-option-hover-state-layer-color)',
          height: '',
        },
      }),
    ),
  ],
};
