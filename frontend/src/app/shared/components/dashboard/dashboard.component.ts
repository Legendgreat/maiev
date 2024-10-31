import { Component } from '@angular/core';
import { SecretsComponent } from '../../../modules/secrets/secrets.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SecretsComponent],
  templateUrl: `./dashboard.component.html`,
  styles: ``,
})
export class DashboardComponent {}
