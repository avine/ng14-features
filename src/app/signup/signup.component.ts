import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgClass, NgIf, FooterComponent],
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  protected signup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    cgu: [false, [Validators.requiredTrue]],
  });

  protected getClasses(control: AbstractControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid,
    };
  }

  constructor(private formBuilder: FormBuilder) {}

  protected resetEmail() {
    this.signup.controls.email.reset();
  }

  protected disableEmail() {
    this.signup.controls.email[this.signup.controls.email.enabled ? 'disable' : 'enable']();
  }

  protected submit() {
    this.signup.disable();
    setTimeout(() => this.signup.enable(), 2000);
  }
}
