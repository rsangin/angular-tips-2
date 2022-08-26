import { AbstractControl, FormGroup } from '@angular/forms';

export abstract class CustomFormGroup<T> extends FormGroup {
  override value!: T;

  override controls!: { [key in keyof T]: AbstractControl<any, any> };

  constructor(
    controls: { [key in keyof T]: AbstractControl<any, any> },
    value?: T
  ) {
    super(controls);
    if (value) this.patchValue(value);
  }
}
