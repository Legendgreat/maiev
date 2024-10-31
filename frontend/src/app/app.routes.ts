import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from './core/guards/auth-guard.service';
import { LoginComponent } from './modules/login/login.component';
import { RootComponent } from './shared/components/root/root.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
