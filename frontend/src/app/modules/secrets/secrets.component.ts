import { Component } from '@angular/core';
import DUMMY_SECRETS from './util/DUMMY_SECRETS';
import { SecretComponent } from './secret/secret.component';
import { NgFor } from '@angular/common';
import { ISecret } from './interfaces/secret.interface';
import { SecretService } from './services/secret.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-secrets',
  standalone: true,
  imports: [SecretComponent, NgFor, NgxSkeletonLoaderModule],
  templateUrl: './secrets.component.html',
  styles: ``,
})
export class SecretsComponent {
  secrets: ISecret[] = [];
  error: Error | undefined;
  loading: boolean = false;

  constructor(private secretService: SecretService) {}

  ngOnInit(): void {
    this.getSecrets();
  }

  getSecrets(): void {
    this.loading = true;
    this.secretService.getSecrets().subscribe({
      next: (secrets) => {
        this.secrets = secrets;
      },
      error: (error) => {
        console.log(error);
        this.error = error;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
