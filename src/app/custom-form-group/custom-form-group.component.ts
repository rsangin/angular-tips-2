import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormModelFormGroup } from './models/form-model-form-group';

@Component({
  selector: 'app-custom-form-group',
  templateUrl: './custom-form-group.component.html',
  styleUrls: ['./custom-form-group.component.scss'],
})
export class CustomFormGroupComponent {
  public formGroup = new FormModelFormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', []),
  });

  public submit(): void {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value.firstName);
    }
  }
}
