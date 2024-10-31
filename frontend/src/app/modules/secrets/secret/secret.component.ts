import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISecret } from '../interfaces/secret.interface';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

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

  pointerDownHandler() {
    console.log();
  }

  pointerUpHandler() {
    console.log();
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.secret.secret);
    this.openSnackBar('Secret copied to clipboard.');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 1500,
      panelClass: 'success',
    });
  }
}
