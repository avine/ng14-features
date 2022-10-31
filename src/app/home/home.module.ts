import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterModule } from '../shared/components/footer/footer.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StandaloneComponentsComponent } from './standalone-components/standalone-components.component';
import { TypedFormsComponent } from './typed-forms/typed-forms.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FooterModule],
  declarations: [HomeComponent, StandaloneComponentsComponent, TypedFormsComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
