import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    cgu: [false, [Validators.requiredTrue]],
  });

  email = this.signup.get('email') as FormControl;

  password = this.signup.get('password') as FormControl;

  cgu = this.signup.get('cgu') as FormControl;

  getClasses(control: AbstractControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid,
    };
  }

  constructor(private formBuilder: FormBuilder) {}

  resetEmail() {
    this.signup.get('email')?.reset();
  }

  disableEmail() {
    this.email[this.email.enabled ? 'disable' : 'enable']();
  }

  submit() {
    this.signup.disable();
    setTimeout(() => this.signup.enable(), 2000);
  }
}
