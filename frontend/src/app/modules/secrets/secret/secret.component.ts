import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISecret } from '../interfaces/secret.interface';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import SecretEnum from '../util/SecretEnums';

@Component({
  selector: 'app-secret',
  standalone: true,
  imports: [MatCardModule, MatIcon, CommonModule],
  templateUrl: './secret.component.html',
  styles: ``,
})
export class SecretComponent {
  @Input() secret!: ISecret;

  private _snackBar = inject(MatSnackBar);
  public SecretEnum = SecretEnum;

  pointerDownHandler() {
    console.log();
  }

  pointerUpHandler() {
    console.log();
  }

  copyToClipboard() {
    if (this.secret.type === SecretEnum.LOGIN) {
      navigator.clipboard.writeText(this.secret.data.password);
      this.openSnackBar('Secret copied to clipboard.');
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 1500,
      panelClass: 'success',
    });
  }
}
