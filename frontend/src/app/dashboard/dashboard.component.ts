import { Component } from '@angular/core';
import { PageComponent } from '../common/page/page.component';
import { SecretListComponent } from '../secret/secret-list/secret-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PageComponent, SecretListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
