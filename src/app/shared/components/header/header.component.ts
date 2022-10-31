import { APP_NAME } from 'src/app/app.provider';

import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(@Inject(APP_NAME) public appName: string) {}
}
