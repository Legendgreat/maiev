import { RouterOutlet } from '@angular/router';
import { Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../common/header/header.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatSidenavModule],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {}
