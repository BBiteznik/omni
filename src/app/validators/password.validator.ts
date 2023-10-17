import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordValidator {
  validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const hasCapitalLetter = /[A-Z]/.test(value);
      const hasLowerLetter = /[a-z]/.test(value);
      const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
        value
      );
      const hasMinimumLength = value.length >= 6;

      const isValid =
        hasCapitalLetter &&
        hasLowerLetter &&
        hasSpecialCharacter &&
        hasMinimumLength;

      return isValid ? null : { passwordComplexity: true };
    };
  }
}
