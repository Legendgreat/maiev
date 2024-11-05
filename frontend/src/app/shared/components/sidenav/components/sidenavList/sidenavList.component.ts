import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ISidenavListItem } from '../../interfaces/SidenavListItem.interface';
import { SidenavListItemComponent } from './sidenavListItem.component';

@Component({
  selector: 'app-sidenav-list',
  standalone: true,
  imports: [CommonModule, MatListModule, SidenavListItemComponent],
  templateUrl: './sidenavList.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavListComponent {
  headerList: ISidenavListItem[] = [{ id: 'h1', label: 'Home', icon: 'home' }];
  bodyList: ISidenavListItem[] = [
    { id: 'b1', label: 'Test 1' },
    { id: 'b2', label: 'Test 2' },
  ];
  footerList: ISidenavListItem[] = [
    { id: 'f1', label: 'Logout', icon: 'logout' },
  ];
}
