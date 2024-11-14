import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { SidenavService } from '../sidenav/services/sidenav.service';
import { SecretService } from '../../../modules/secrets/services/secret.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbar, MatButtonModule, MatIcon],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  constructor(
    private sidenavService: SidenavService,
    private secretService: SecretService,
  ) {}

  handleMenuClick($event: MouseEvent) {
    $event.preventDefault();
    this.sidenavService.toggleSidenav();
  }

  handleNewSecretClick() {
    this.secretService.openCreateSecretDialog();
  }
}
