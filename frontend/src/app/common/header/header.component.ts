import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbar, MatButtonModule, MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() menuOpen: boolean = false;
  menuClick = output<boolean>();

  handleMenuClick($event: MouseEvent) {
    $event.preventDefault();
    this.menuClick.emit(!this.menuOpen);
  }
}
