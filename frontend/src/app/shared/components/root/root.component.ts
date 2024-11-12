import { RouterOutlet } from '@angular/router';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/components/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavComponent],
  templateUrl: './root.component.html',
  styles: ``,
})
export class RootComponent {}
