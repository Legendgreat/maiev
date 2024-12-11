import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DividerComponent } from '../../../../../shared/components/divider/divider.component';
import { CreateSecretDialogService } from '../../services/create-secret-dialog.service';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    DividerComponent,
  ],
  selector: 'app-credential-form',
  templateUrl: 'credential-form.component.html',
})
export class CredentialFormComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);

  constructor(private csds: CreateSecretDialogService) {}

  ngOnInit() {}

  loginFormGroup: FormGroup = this._formBuilder.group({ loginCtrl: [''] });
}
