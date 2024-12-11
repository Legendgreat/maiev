import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { ISecret } from '../interfaces/secret.interface';
import { LoggingService } from '../../../core/services/logging.service';
import { CreateSecretDialogComponent } from '../create-secret-dialog/components/create-secret-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class SecretService {
  private secretsUrl = '/secrets';
  private logOrigin = 'SecretService';

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private loggingService: LoggingService,
  ) {}

  getSecrets(): Observable<ISecret[]> {
    return this.http.get<ISecret[]>(this.secretsUrl).pipe(
      tap((_) => this.log('Fetched secrets.')),
      catchError(this.handleError<ISecret[]>('getSecrets', [])),
    );
  }

  openCreateSecretDialog() {
    this.dialog.open(CreateSecretDialogComponent, {
      height: '90%',
      width: '90%',
    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.loggingService.error(
        `${operation} failed: ${error.message}`,
        this.logOrigin,
      );

      return of(result as T);
    };
  }

  private log(message: string) {
    this.loggingService.log(message, this.logOrigin);
  }
}
