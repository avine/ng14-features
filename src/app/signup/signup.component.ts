import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../shared/services/auth.service';
import { SignupForm } from './signup.types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  signup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    eula: [false, [Validators.requiredTrue]],
  });

  email = this.signup.get('email') as FormControl;

  password = this.signup.get('password') as FormControl;

  eula = this.signup.get('eula') as FormControl;

  getValidationClasses(control: AbstractControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid,
    };
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  resetEmail() {
    this.signup.controls['email'].reset();
  }

  disableEmail() {
    this.email[this.email.enabled ? 'disable' : 'enable']();
  }

  submit() {
    this.signup.disable();
    this.authService.signup(this.signup.value as SignupForm).subscribe((result) => {
      console.log(result);
      this.signup.enable();
    });
  }
}
