import { delay, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { SignupForm } from '../../signup/signup.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signup(data: SignupForm) {
    return of(data).pipe(delay(1000));
  }
}
