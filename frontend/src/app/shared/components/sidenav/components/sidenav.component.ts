import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';
import { SidenavListComponent } from './sidenavList/sidenavList.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, SidenavListComponent],
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
  constructor(private sidenavService: SidenavService) {}

  isOpened() {
    return this.sidenavService.open;
  }
}
