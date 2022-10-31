import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_NAME } from './app.provider';
import { HomeComponent } from './home/home.component';
import { FooterModule } from './shared/components/footer/footer.module';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FooterModule],
  providers: [{ provide: APP_NAME, useValue: 'ng13' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
