import { Component } from '@angular/core';
import DUMMY_SECRETS from './util/DUMMY_SECRETS';
import { SecretComponent } from './secret/secret.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-secrets',
  standalone: true,
  imports: [SecretComponent, NgFor],
  templateUrl: './secrets.component.html',
  styles: ``,
})
export class SecretsComponent {
  secretList = DUMMY_SECRETS;
}
