import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import SecretEnum from '../../util/SecretEnums';
import { MatIconModule } from '@angular/material/icon';
import { CdkStepper } from '@angular/cdk/stepper';
import { CredentialFormComponent } from './credential-form/credential-form.component';

type ClickedType = {
  type: SecretEnum;
  clicked: boolean;
};

@Component({
  selector: 'app-new-secret',
  standalone: true,
  imports: [
    CredentialFormComponent,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './create-secret-dialog.component.html',
  styleUrl: './create-secret-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSecretDialogComponent {
  private _formBuilder = inject(FormBuilder);

  secretEnum = SecretEnum;
  selectedType: SecretEnum | undefined;

  stepperLoaded = false;

  setSelectedType(type: SecretEnum) {
    this.selectedType = type;
  }

  secretTypes = [
    {
      icon: 'person',
      value: SecretEnum.LOGIN,
    },
    {
      icon: 'credit_card',
      value: SecretEnum.CREDITCARD,
    },
  ];

  private typePreviouslyClicked: ClickedType[] = (
    Object.keys(SecretEnum) as Array<keyof typeof SecretEnum>
  ).map((key) => ({
    type: SecretEnum[key],
    clicked: false,
  }));

  public typeClickHandler(type: SecretEnum, stepper: MatStepper) {
    const typeIndex = this.typePreviouslyClicked.findIndex(
      (value) => value.type,
    );

    if (this.typePreviouslyClicked[typeIndex].clicked) {
      stepper.next();
      return;
    }

    this.setSelectedType(type);
    this.typePreviouslyClicked[typeIndex].clicked = true;

    setTimeout(() => {
      this.typePreviouslyClicked[typeIndex].clicked = false;
    }, 250);
  }

  public ngAfterViewInit() {
    this.stepperLoaded = true;
  }

  getStepperNextPossible(stepper: MatStepper) {
    const stepIndex = stepper.selectedIndex;
    const nextStep = stepper.steps.get(stepIndex + 1);

    if (!nextStep) {
      return false;
    }

    return stepper._stepIsNavigable(stepIndex, nextStep!);
  }

  loginFormGroup: FormGroup = this._formBuilder.group({ loginCtrl: [''] });

  firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });
}
