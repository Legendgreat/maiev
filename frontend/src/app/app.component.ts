import { Component } from '@angular/core';
import { PageComponent } from './common/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
