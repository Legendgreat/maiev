import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public open = signal(false);

  constructor() {}

  toggleSidenav() {
    this.open.set(!this.open());
  }

  showSidenav(state: boolean) {
    this.open.set(state);
  }
}
