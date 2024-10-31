import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public open = false;

  constructor() {}

  toggleSidenav(state?: boolean) {
    this.open = state ?? !this.open;
  }
}
