import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { ISidenavListItem } from '../../interfaces/SidenavListItem.interface';

@Component({
  selector: 'app-sidenav-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './sidenavList.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavListComponent {
  @Input() list: ISidenavListItem[] | null = null;
}
