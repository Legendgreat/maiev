import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './sidenav.component.html',
  styles: ``,
})
export class SidenavComponent {
  constructor(private sidenavService: SidenavService) {}

  isOpened() {
    return this.sidenavService.open;
  }
}
