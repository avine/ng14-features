import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { FooterComponent } from '../shared/components/footer/footer.component';
import { AuthService } from '../shared/services/auth.service';
import { SignupForm } from './signup.types';

@Component({
  standalone: true,
  imports: [JsonPipe, NgClass, NgIf, ReactiveFormsModule, FooterComponent],
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  private formBuilder = inject(FormBuilder);

  private authService = inject(AuthService);

  protected signup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    eula: [false, [Validators.requiredTrue]],
  });

  protected getValidationClasses(control: AbstractControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid,
    };
  }

  protected resetEmail() {
    this.signup.controls.email.reset();
  }

  protected disableEmail() {
    this.signup.controls.email[this.signup.controls.email.enabled ? 'disable' : 'enable']();
  }

  protected submit() {
    this.signup.disable();
    this.authService.signup(this.signup.value as SignupForm).subscribe((result) => {
      console.log(result);
      this.signup.enable();
    });
  }
}
