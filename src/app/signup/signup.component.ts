import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgClass, NgIf, FooterComponent],
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
    this.signup.controls.email[this.signup.controls.email.enabled ? 'disable' : 'enable']();
  }

  submit() {
    this.signup.disable();
    setTimeout(() => this.signup.enable(), 2000);
  }
}
