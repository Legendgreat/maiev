import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RootComponent } from './root/root.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
