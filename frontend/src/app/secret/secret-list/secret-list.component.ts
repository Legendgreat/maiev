import { Component } from '@angular/core';
import DUMMY_SECRETS from '../util/DUMMY_SECRETS';
import { SecretListItemComponent } from './secret-list-item/secret-list-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-secret-list',
  standalone: true,
  imports: [SecretListItemComponent, NgFor],
  templateUrl: './secret-list.component.html',
  styleUrl: './secret-list.component.scss',
})
export class SecretListComponent {
  secretList = DUMMY_SECRETS;
}
