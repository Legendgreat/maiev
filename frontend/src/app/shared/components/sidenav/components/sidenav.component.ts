import { Component, computed } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';
import { SidenavListComponent } from './sidenavList/sidenavList.component';
import { ISidenavListItem } from '../interfaces/SidenavListItem.interface';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, SidenavListComponent],
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
  constructor(
    private sidenavService: SidenavService,
    private authService: AuthService,
    private router: Router,
  ) {}

  headerList: ISidenavListItem[] = [
    { id: 'h1', label: 'Home', icon: 'home', routerLink: '/' },
  ];
  bodyList: ISidenavListItem[] = [
    { id: 'b1', label: 'Test 1' },
    { id: 'b2', label: 'Test 2' },
  ];
  footerList: ISidenavListItem[] = [
    {
      id: 'f1',
      label: 'Logout',
      icon: 'logout',
      onClick: () => {
        this.authService.logout();
      },
    },
  ];

  isOpen = computed(() => this.sidenavService.open());
}
