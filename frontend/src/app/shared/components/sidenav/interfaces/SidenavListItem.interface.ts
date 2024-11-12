import { RouterLink } from '@angular/router';

export interface ISidenavListItem {
  id: string;
  label: string;
  icon?: string;
  routerLink?: (string | number)[] | string;
  onClick?: () => void;
}
