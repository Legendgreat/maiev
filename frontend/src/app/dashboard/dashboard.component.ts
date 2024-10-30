import { Component } from '@angular/core';
import { SecretListComponent } from '../secret/secret-list/secret-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SecretListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
