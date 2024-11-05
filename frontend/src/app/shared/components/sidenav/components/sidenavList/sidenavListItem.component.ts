import { CommonModule, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { ISidenavListItem } from '../../interfaces/SidenavListItem.interface';

@Component({
  selector: 'app-sidenav-list-item',
  standalone: true,
  imports: [CommonModule, NgForOf, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './sidenavListItem.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavListItemComponent {
  @Input() item: ISidenavListItem | null = null;
}
