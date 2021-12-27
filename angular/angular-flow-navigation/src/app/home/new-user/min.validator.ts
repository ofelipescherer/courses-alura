import { AbstractControl } from '@angular/forms';

export function minValidator(control: AbstractControl) {
  const val = control.value as string;
  if (val !== val.toLocaleLowerCase()) {
    return { lowerCase: true };
  } else {
    return null;
  }
}
