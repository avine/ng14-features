import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from '../shared/components/footer/footer.module';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, ReactiveFormsModule, SignupRoutingModule, FooterModule],
})
export class SignupModule {}
