import { Injectable } from '@angular/core';
import { CreateSecretDialogComponent } from '../components/create-secret-dialog.component';
import ISecretInputData from '../interfaces/secret-input-data.interface';
import {
  CredentialData,
  CreditcardData,
} from '../../interfaces/secret.interface';

@Injectable({ providedIn: CreateSecretDialogComponent })
export class CreateSecretDialogService {
  data: ISecretInputData = {
    credentials: {},
    creditcard: {},
  };
  constructor() {}

  setData(
    type: 'credentials' | 'creditcard',
    data: Partial<CredentialData> | Partial<CreditcardData>,
  ) {
    this.data[type] = data;
  }

  clearData() {
    (Object.keys(this.data) as Array<keyof typeof this.data>).map((key) => {
      this.data[key] = {};
    });
  }

  getData(type: 'credentials' | 'creditcard') {
    return this.data[type];
  }
}
